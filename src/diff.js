// import _ from 'lodash' 

export default function diff(obj1, obj2) {
  const diff = {}

  for (const [key, value1] of Object.entries(obj1)) {
    if (Object.hasOwn(obj2, key)) {
      if (obj2[key] === value1) {
        diff[key] = value1
      }
      else {
        diff[`- ${key}`] = value1
        diff[`+ ${key}`] = obj2[key]
      }
    }
    else {
      diff[`- ${key}`] = value1
    }
  }

  for (const [key, value2] of Object.entries(obj2)) {
    if (!(Object.hasOwn(obj1, key))) {
      diff[`+ ${key}`] = value2
    }
  }
  
  return JSON.stringify(diff)
}
