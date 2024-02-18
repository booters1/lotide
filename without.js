const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const remain = []
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      remain.push(element);
    }
  }
return remain;
};

//test cases 

const words = ["hello", "world", "lighthouse"];
const remain1 = without(words, ["lighthouse"]); // testing without function
assertArraysEqual(remain1, ["hello", "world"]); // pass
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass// no need to capture return value for this test case
assertArraysEqual(words, remain1); // fail
// Make sure the original array was not altered by the without function
const numbers = [1, 2, 3, 4, 5];
const remain2 = without(numbers, [1, 3, 5]);// testing w/out func
assertArraysEqual(remain2, [2, 4]); // pass
assertArraysEqual(numbers, [1, 2, 3, 4, 5]); // pass
assertArraysEqual(numbers, remain2); // fail

module.exports = without;