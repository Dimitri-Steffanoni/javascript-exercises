const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    return (Math.abs((a-b))+1) * (a + b) / 2;
  }
};

// Do not edit below this line
module.exports = sumAll;
