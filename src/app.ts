import express from 'express';
import * as fs from 'fs';
import { FindCubes } from './Cubes';
import { INPUT_FILE, OUTPUT_FILE } from './constant';

const app = express();

fs.readFile(INPUT_FILE, 'utf8', (err: any, data: any) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const results = FindCubes(data);
  console.log(results.join("\n"));
  fs.writeFileSync(OUTPUT_FILE, results.join("\n"));
});

export default app;