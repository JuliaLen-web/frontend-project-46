import {readFileSync} from 'node:fs'
import path from 'path'
import yaml from 'js-yaml'

export default function (filepath) {
  let parse;
  const format = path.extname(filepath)
  if (format === '.yml' || format === '.yaml') {
    parse = yaml.load
  } else {
    parse = JSON.parse
  }

  return parse(readFileSync(filepath))
}
