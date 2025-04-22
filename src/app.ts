import express from 'express';
import * as fs from 'fs';
import { FindCubes } from './Cubes';
import { INPUT_FILE, OUTPUT_FILE } from './constant';

const app = express();

const tasks = fs.readFileSync(INPUT_FILE, 'utf8')
  .toString()
  .trimEnd()
  .split("\n");

const results = FindCubes(tasks)
console.log(results.join("\n"));
fs.writeFileSync(OUTPUT_FILE, results.join("\n"));

process.exit(0);

export default app;