// const repeatString = function (word, times) {
//   if (times < 0) return "ERROR";
//   let string = "";
//   for (let i = 0; i < times; i++) {
//     string += word;
//   }
//   return string;
// };

const repeatString = function(string, num) {
  if (num === 0) {
    return '';
  }
  if (num < 0) {
    return 'ERROR';
  }

  let repeatedString = string.repeat(num);
  const occurrences = (repeatedString.match(/((hey))/g) || []).length;

  if (occurrences === num) {
    return repeatedString;
  } else {
    throw new Error(`Invalid output: Expected ${num} occurrences of 'hey', but found ${occurrences}`);
  }
};


module.exports = repeatString;
