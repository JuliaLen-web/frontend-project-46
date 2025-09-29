// import _ from 'lodash' // Импорт Lodash

export default function diff(obj1, obj2) {
  const diff = {}

  for (const [key, value] of Object.entries(obj1)) {
    if (Object.hasOwn(obj2, key)) {
      if (obj2[key] === value) {
        diff[key] = value
      }
      else {
        diff[`+ ${key}`] = value
        diff[`- ${key}`] = value
      }
    }
    else {
      diff[`- ${key}`] = value
    }
  }

  for (const [key, value] of Object.entries(obj2)) {
    if (!(Object.hasOwn(obj1, key))) {
      diff[`+ ${key}`] = value
    }
  }
  
  return diff
}
