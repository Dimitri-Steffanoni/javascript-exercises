const removeFromArray = function (arr, ...args) {

for (let i in args){
    let y = args[i];
  while (arr.indexOf(y) != -1) {
    arr.splice(arr.indexOf(y), 1);
  }
}
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
