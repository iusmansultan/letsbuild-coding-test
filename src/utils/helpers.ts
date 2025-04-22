import { Box } from "../interfaces/Cube";

const volume = (length: number, breadth: number, height: number): number => {
    return length * breadth * height;
};

const powersOfTwo = (arrayLength: number): number[] => {
    const powers: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
        const pow = Math.pow(2, i);
        powers.push(pow);
    }
    return powers;
};

const parseInput = (input: string): { boxArray: Box[], cubeArray: number[][] } => {
    const lines = input.split('\n').filter(line => line.trim().length > 0);
    const boxArray: Box[] = [];
    const cubeArray: number[][] = [];

    lines.forEach(line => {
        const elements = line.split(" ");
        const cubeSizes = elements.splice(3).map(Number);
        cubeArray.push(cubeSizes);
        boxArray.push(new Box(parseInt(elements[0]), parseInt(elements[1]), parseInt(elements[2])));
    });

    return { boxArray, cubeArray };
};

const calculateBoxVolumes = (boxArray: Box[]): number[] => {
    return boxArray.map(box => volume(box.length, box.breadth, box.height));
};

const calculateCubeVolumes = (cubeArray: number[][]): number[][] => {
    return cubeArray.map(cubes => {
        const length = cubes.length;
        const powersArray = powersOfTwo(length);
        return cubes.map((cube, z) => cube * Math.pow(powersArray[z], 3));
    });
};

const calculatePackedCubes = (
    boxVolume: number,
    cubeArray: number[],
    powersArray: number[]
): number => {
    let result = 0;
    let remainingBoxVolume = boxVolume;

    for (let n = cubeArray.length - 1; n >= 0; n--) {
        const cubeNumber = cubeArray[n];
        let boxVolumeAfterPlacement = remainingBoxVolume - cubeNumber * Math.pow(powersArray[n], 3);

        if (boxVolumeAfterPlacement < 0) {
            result = Math.floor(result + remainingBoxVolume / Math.pow(Number(powersArray[n]), 3));
            break;
        } else if (boxVolumeAfterPlacement > 0) {
            result += cubeNumber;
            remainingBoxVolume = boxVolumeAfterPlacement;
        }
    }

    return result;
};


export { volume, powersOfTwo, parseInput, calculateBoxVolumes, calculateCubeVolumes, calculatePackedCubes };
