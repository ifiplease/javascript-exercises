const repeatString = function(string, num) {
    if (num === 0 || string === 0) {
        return '';
    }
    if (num < 0) {
        return 'ERROR';
    }
    let repeatedString = '';
    for (let i =0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString
};
  // Generate a random number between 0 and 999
  const randomNumber = Math.floor(Math.random() * 1000);
  
  // Pass the random number as the second argument to repeatString
  repeatString('', randomNumber);
  
// Do not edit below this line
module.exports = repeatString;
