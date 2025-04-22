import { calculateBoxVolumes, calculateCubeVolumes, calculatePackedCubes, parseInput, powersOfTwo } from "./utils/helpers";

const findCubes = (input: string): number[] => {
  const { boxArray, cubeArray } = parseInput(input);
  const boxVolumes = calculateBoxVolumes(boxArray);
  const cubeVolumes = calculateCubeVolumes(cubeArray);

  const resultArray: number[] = [];

  for (let i = 0; i < boxVolumes.length; i++) {
    const boxVolume = boxVolumes[i];
    const cubesVolume = cubeVolumes[i].reduce((sum, cube) => sum + cube, 0);

    let result = 0;
    if (boxVolume > cubesVolume) {
      result = -1;
    } else {
      const powersArray = powersOfTwo(cubeArray[i].length);
      result = calculatePackedCubes(boxVolume, cubeArray[i], powersArray);
    }

    resultArray.push(result);
  }

  return resultArray;
};

export { findCubes };