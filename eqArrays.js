const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  // if the length arrays are different
  if (array1.length !== array2.length) {
    return false;
  }
  // check inside array
  for (let i = 0; i < array1.length; i++) {
    // checkk for both arrays, call eqArrays
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      // compare values otherwise
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  
  return true;
};

module.exports = eqArrays;

/*
test cases that arent in test folder
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => should return true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => should return false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => should return false
*/ 