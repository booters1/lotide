/*const eqArrays = function(array1, array2) {
  // if the length arrays are different
  if (array1.length !== array2.length) {
    return false;
  }
  // check inside array
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
*/
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

/*const assertArraysEqual = function(actual, expected) {
  const message = eqArrays(actual, expected) ? '✅✅✅pass✅✅✅' : '🛑🛑🛑fail🛑🛑🛑';
  console.log(`${message}: [${actual}] === [${expected}]`);
};
  */

// start with empty array, loop thru it, and check for array and combine 
const flatten = function(arr) {
  let flattenedArray = [];
  for (const element of arr) {
    // check for arrays
    if (Array.isArray(element)) {
      // combining of the arrays
      flattenedArray = flattenedArray.concat(element);
    } else {
      // any elements are added to flattened
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};


//test case
console.log(flatten([1, 2, [3, 4], 5, [6]])); //=> [1, 2, 3, 4, 5, 6]

module.exports = flatten;
