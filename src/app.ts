import express from 'express';
import * as fs from 'fs';
import { findCubes } from './Cubes';

const app = express();

fs.readFile('./src/files/problems.txt', 'utf8', (err: any, data: any) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const results = findCubes(data);
  console.log(results.join("\n"));
  fs.writeFileSync('./src/files/output.txt', results.join("\n"));
});

export default app;