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

export { volume, powersOfTwo, parseInput};
