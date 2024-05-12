const reverseString = function(string) {
    let l = string.length;
    console.log(l);
    let inverted='';

    for (let i = l-1; i>=0; i--){
        inverted+=string[i];
        console.log(inverted);
    }
    return inverted;
};

// Do not edit below this line
module.exports = reverseString;
