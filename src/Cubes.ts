import { Box } from "./interfaces/Cube";
import { powersOfTwo, volume } from "./utils/helpers";

const findCubes = (input: string): number[] => {
    const lines = input.split('\n').filter(line => line.trim().length > 0);
    const boxArray: Box[] = [];
    const cubeArray: number[][] = [];
  
    // Split each array element into 2 arrays: 'boxArray' with box dimensions and 'cubeArray' with number of cubes
    lines.forEach(line => {
      const elements = line.split(" ");
      const cubeSizes = elements.splice(3).map(Number);  // All elements after the first three are cube counts
      cubeArray.push(cubeSizes);
      boxArray.push(new Box(parseInt(elements[0]), parseInt(elements[1]), parseInt(elements[2])));
    });
  
    // Find volume of boxes and store in 'boxVolumeArray'
    const boxVolumeArray = boxArray.map(box => volume(box.length, box.breadth, box.height));
  
    // Find volume of cubes and store in 'cubeVolumeArray'
    const cubeVolumeArray = cubeArray.map(cubes => {
      const length = cubes.length;
      const powersArray = powersOfTwo(length); // To find the array with powers of 2, e.g., powersArray = [1, 2, 4, 8, ...]
      const cubeVol: number[] = [];
      for (let z = 0; z < cubes.length; z++) {
        const eachCubeVol = Math.pow(powersArray[z], 3);
        cubeVol[z] = cubes[z] * eachCubeVol;
      }
      return cubeVol;
    });
  
    // Check for conditions
    const resultArray: number[] = [];
    for (let i = 0; i < boxVolumeArray.length; i++) {
      let cubesVolume = 0;
      let result = 0;
  
      // Find total volume of all cubes in each cubeVolumeArray element
      cubeVolumeArray[i].forEach(cube => cubesVolume += cube);
  
      let boxVolume = boxVolumeArray[i];
      if (boxVolume > cubesVolume) {
        result = -1;
      } else {
        const powersArray = powersOfTwo(cubeArray[i].length);
        for (let n = cubeArray[i].length - 1; n >= 0; n--) {
          const cubeNumber = Number(cubeArray[i][n]);
          let boxVolume1 = boxVolume - cubeNumber * Math.pow(Number(powersArray[n]), 3);
  
          if (boxVolume1 < 0) {
            result = Math.floor(result + boxVolume / (Math.pow(Number(powersArray[n]), 3)));
            break;
          } else if (boxVolume1 > 0) {
            result = result + cubeNumber;
            boxVolume = boxVolume1;
          }
        }
      }
      resultArray.push(parseInt(result.toString()));
    }
  
    return resultArray;
  };

  export { findCubes };