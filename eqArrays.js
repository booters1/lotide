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
