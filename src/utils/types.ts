import readline from "readline";

type CubesType = {
    size: number,
    amount: number
}[]

type BoxType = {
    h: number,
    w: number,
    d: number
}


const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

interface calculateMinProps {
    box: BoxType,
    cubes: CubesType
}

export { readLineInterface, calculateMinProps }