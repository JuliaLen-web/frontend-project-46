
import formatData from './formatters/index.js';
import parsers from "./parsers.js"
import diff from "./diff.js";

const genDiff = (path1, path2, format = 'stylish') => {

  const resultDiff = diff(parsers(path1), parsers(path2));
  return formatData(resultDiff, format);
};

export default genDiff;
