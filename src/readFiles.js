import { readFileSync } from 'node:fs';

export default function readFiles(file) {
  readFileSync(file);
  console.log(JSON.parse(readFileSync(file)))
  return JSON.parse(readFileSync(file));
}
