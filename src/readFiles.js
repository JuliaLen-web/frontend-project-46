import { readFileSync } from 'node:fs';

export default function readFiles(file) {
  readFileSync(file)
  return JSON.parse(readFileSync(file))
}
