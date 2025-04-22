import { calculateMinCubes, parseTask } from "./utils/helpers";

function FindCubes(tasks: string[]) {
  const results: number[] = [];
  tasks.forEach((task: string) => {

    const res = parseTask(task)

    const result = calculateMinCubes(res)
    results.push(result)
  })
  return results
}

export { FindCubes };