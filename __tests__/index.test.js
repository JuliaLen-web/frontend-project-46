import diff from '../src/diff.js'
import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = name => path.join(__dirname, '..', '__fixtures__', name)

describe('diff json files', () => {
    let expected
    let file1Obj
    let file2Obj

    beforeAll(() => {
        expected = fs.readFileSync(getFixturePath('result.json'), 'utf-8')
        file1Obj = fs.readFileSync(getFixturePath('file1.json'), 'utf-8')
        file2Obj = fs.readFileSync(getFixturePath('file2.json'), 'utf-8')
    })

    test('diff object type', () => {
        let formmatedExpect = JSON.parse(expected)
        let formmatedDiff = JSON.parse(diff( JSON.parse(file1Obj), JSON.parse(file2Obj)))

        expect(formmatedDiff).toEqual(formmatedExpect)
    })

    test('diff string type', () => {
        let formmatedExpect = JSON.stringify(JSON.parse(expected))
        let formmatedDiff = diff( JSON.parse(file1Obj), JSON.parse(file2Obj))

        expect(formmatedDiff).toEqual(formmatedExpect)
    })
})

describe('diff yml files', () => {
    let expected
    let file1Obj
    let file2Obj

    beforeAll(() => {
        expected = fs.readFileSync(getFixturePath('result.json'), 'utf-8')
        file1Obj = fs.readFileSync(getFixturePath('file1.yml'), 'utf-8')
        file2Obj = fs.readFileSync(getFixturePath('file2.yml'), 'utf-8')
    })

    test('diff object type', () => {
        let formmatedExpect = JSON.parse(expected)
        let formmatedDiff = JSON.parse(diff( yaml.load(file1Obj), yaml.load(file2Obj)))

        expect(formmatedDiff).toEqual(formmatedExpect)
    })

    test('diff string type', () => {
        let formmatedExpect = JSON.stringify(JSON.parse(expected))
        let formmatedDiff = diff( yaml.load(file1Obj), yaml.load(file2Obj))

        expect(formmatedDiff).toEqual(formmatedExpect)
    })
})
