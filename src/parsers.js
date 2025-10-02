import { readFileSync } from 'node:fs'
import path from 'path'
import yaml from 'js-yaml'

export default function (filepath) {
  const format = path.extname(filepath)
  if (format === '.json') {
    return JSON.parse(readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'))
  }
  else {
    return yaml.load(readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'))
  }
}
