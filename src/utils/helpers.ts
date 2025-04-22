import { calculateMinProps } from "./types";

function getQuotientAndReminder(boxDim: number, cubeDim: number) {
    const quotient = Math.floor(boxDim / cubeDim);
    const remainder = boxDim % cubeDim;
    return { quotient, remainder };
}

function destroyBox() {
    return { h: 0, w: 0, d: 0 }
}

function calculateMinCubes({ box, cubes }: calculateMinProps) {
    let counter = 0;
    for (let cube of cubes) {
        if (cube.amount <= 0) continue;
        if (box.h <= 0 || box.w <= 0 || box.d <= 0) continue;
        if (counter < 0) continue;

        const { quotient: quotientH, remainder: remainderH } = getQuotientAndReminder(box.h, cube.size);
        const { quotient: quotientW, remainder: remainderW } = getQuotientAndReminder(box.w, cube.size);
        const { quotient: quotientD, remainder: remainderD } = getQuotientAndReminder(box.d, cube.size);

        const numberOfFittingCubes = quotientH * quotientD * quotientW;

        if (numberOfFittingCubes > 0) {

            if (remainderH > 0 && remainderD > 0 && remainderW > 0) {
                const restBox1 = { h: remainderH, w: box.w, d: box.d };
                const restBox2 = { h: box.h - restBox1.h, w: remainderW, d: box.d };
                const restBox3 = { h: box.h - restBox1.h, w: box.w - restBox2.w, d: remainderD };

                box.h = box.h - remainderH;
                box.w = box.w - remainderW;
                box.d = box.d - remainderD;


                counter += calculateMinCubes({ box: restBox1, cubes });
                counter += calculateMinCubes({ box: restBox2, cubes });
                counter += calculateMinCubes({ box: restBox3, cubes });
            }

            for (let height = 1; height <= quotientH; height++) {
                for (let width = 1; width <= quotientW; width++) {
                    for (let depth = 1; depth <= quotientD; depth++) {
                        if (cube.amount > 0) {
                            counter += 1;
                            cube.amount -= 1;
                            if (height === quotientH && width == quotientW && depth === quotientD) {
                                if (box.h - height * cube.size > 0 || box.w - width * cube.size > 0 || box.d - depth * cube.size > 0) {
                                    box = {
                                        h: Math.max(box.h - height * cube.size, box.h),
                                        w: Math.max(box.w - width * cube.size, box.w),
                                        d: Math.max(box.d - depth * cube.size, box.d)
                                    }
                                } else {
                                    box = destroyBox()
                                }
                            }
                        }
                        else {
                            if (cube.size === 1) {
                                counter = -1;
                                continue;
                            }


                            const restBox1 = { h: (quotientH - height) * cube.size, w: quotientW * cube.size, d: quotientD * cube.size };


                            const restBox2 = { h: cube.size, w: (quotientW - width) * cube.size, d: cube.size };
                            const restBox3 = { h: cube.size, w: quotientW * cube.size, d: Math.max((quotientD - depth), 1) * cube.size };

                            box = destroyBox()

                            counter += calculateMinCubes({ box: restBox1, cubes });
                            counter += calculateMinCubes({ box: restBox2, cubes });
                            counter += calculateMinCubes({ box: restBox3, cubes });
                        }
                    }
                }
            }
        }
        if (cube.size === 1 && cube.amount === 0 && box.h > 0 && box.w > 0 && box.d > 0) counter = -1;
    }
    return counter;
}

function validateInput(input: string) {
    const reg = /^\d+ \d+ \d+( \d+)+( )*?$/
    return reg.test(input)
}


function parseTask(task: string): calculateMinProps {
    const parse = task.split(' ')

    const box = {
        h: parseInt(parse.shift() || '0', 10),
        w: parseInt(parse.shift() || '0', 10),
        d: parseInt(parse.shift() || '0', 10)
    }
    const cubes = (parse.map((value, index) =>
    ({
        size: 2 ** index,
        amount: parseInt(value, 10)
    }))).reverse()

    return { box, cubes }
}

export { calculateMinCubes, validateInput, parseTask }
