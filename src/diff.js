// import parsers from "./parsers.js"
import _ from 'lodash'

// export default function (file1, file2) {
//   return diff(parsers(file1), parsers(file2))
// }

// function diff(obj1, obj2) {
//   const diff = {}
//
//   for (const [key, value1] of Object.entries(obj1)) {
//     if (Object.hasOwn(obj2, key)) {
//       if (obj2[key] === value1) {
//         diff[key] = value1
//       }
//       else {
//         diff[`- ${key}`] = value1
//         diff[`+ ${key}`] = obj2[key]
//       }
//     }
//     else {
//       diff[`- ${key}`] = value1
//     }
//   }
//
//   for (const [key, value2] of Object.entries(obj2)) {
//     if (!(Object.hasOwn(obj1, key))) {
//       diff[`+ ${key}`] = value2
//     }
//   }
//
//   return JSON.stringify(diff)
// }

export default function diff(data1, data2) {
  const keys = _.union(Object.keys(data1), Object.keys(data2))
  const sortedKeys = _.sortBy(keys)
  return sortedKeys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return {key, type: 'removed', value: data1[key]}
    }
    if (!Object.hasOwn(data1, key)) {
      return {key, type: 'added', value: data2[key]}
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {key, type: 'nested', children: diff(data1[key], data2[key])}
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'changed',
        oldValue: data1[key],
        newValue: data2[key],
      }
    }
    return {key, type: 'unchanged', value: data1[key]}
  })
}
