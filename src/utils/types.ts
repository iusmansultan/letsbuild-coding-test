type CubesType = {
    size: number,
    amount: number
}[]

type BoxType = {
    h: number,
    w: number,
    d: number
}


interface calculateMinProps {
    box: BoxType,
    cubes: CubesType
}

export { calculateMinProps }