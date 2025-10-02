import { readFileSync } from 'node:fs'
import path from 'path'
import yaml from 'js-yaml'

export default function (filepath) {
  const format = path.extname(filepath)
  if (format === '.json') {
    return JSON.parse(readFileSync(filepath, 'utf-8'))
  }
  else {
    return yaml.load(readFileSync(filepath, 'utf-8'))
  }
}
