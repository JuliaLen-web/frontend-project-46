import genDiff from '../index.js'
import { fileURLToPath } from 'url'
import { test, expect } from '@jest/globals'
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = name => path.join(__dirname, '..', '__fixtures__', name)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const json = getFixturePath('file1.json')
const yml = getFixturePath('file2.yml')

test('stylish format', () => {
  const resultStylish = readFile('resultStylish.txt')
  expect(genDiff(json, yml)).toEqual(resultStylish)
  expect(genDiff(json, yml, 'stylish')).toEqual(resultStylish.trim())
})

test('plain format', () => {
  const resultPlain = readFile('resultPlain.txt')
  expect(genDiff(json, yml, 'plain')).toEqual(resultPlain.trim())
})

test('JSON format', () => {
  const resultJSON = readFile('resultJSON.txt')
  expect(genDiff(json, yml, 'json')).toEqual(resultJSON)
})
