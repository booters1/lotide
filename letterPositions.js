const letterPositions = function(sentence) {
  const results = {};


  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    //if letter is not space, check for it , if not exists create the array and add   it to the correspondence
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }
  return results;
};

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  const message = eqArrays(actual, expected) ? '✅✅✅pass✅✅✅' : '🛑🛑🛑fail🛑🛑🛑';
  console.log(`${message}: [${actual}] === [${expected}]`);
};


// Test for the string "hello"
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

module.exports = letterPositions;