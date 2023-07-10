const convertToCelsius = function(F) {
  const C = (F - 32) * 5/9;
  return Math.round(C * 10)/10;
};

const convertToFahrenheit = function(C) {
  const F = (C * 9/5) +32;
  return Math.round(F * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
