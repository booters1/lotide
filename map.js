const assertArraysEqual = require('./assertArraysEqual');

// IMPLEMENT MAP
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Testcase
const words = ["ground", "control", "to", "major", "tom"];

//Map each word to its length
const test1 = map(words, word => word.length);
assertArraysEqual(test1, [6, 7, 2, 5, 3]);

//Map each word to uppercase
const test2 = map(words, word => word.toUpperCase());
assertArraysEqual(test2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

//Map each word to first letter
const test3 = map(words, word => word[0]);
assertArraysEqual(test3, ['g', 'c', 't', 'm', 't']);

//Map each word to last letter
const test4 = map(words, word => word[word.length - 1]);
assertArraysEqual(test4, ['d', 'l', 'o', 'r', 'm']);
