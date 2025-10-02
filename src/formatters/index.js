import formStylish from './stylish.js'
import formPlain from './plain.js'
import formJson from './json.js'

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      console.log(formStylish(data))
      return formStylish(data)
    case 'plain':
      console.log(formPlain(data))
      return formPlain(data)
    case 'json':
      console.log(formJson(data))
      return formJson(data)
    default:
      throw new Error(`Unknown format: '${format}'!`)
  }
}

export default formatData
