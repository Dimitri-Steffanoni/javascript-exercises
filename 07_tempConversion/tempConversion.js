const convertToCelsius = function (f) {
  return round(((f - 32.0) * 5.0) / 9.0,1);
};

const convertToFahrenheit = function (c) {
  return round((c * 9.0) / 5.0 + 32.0, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
