const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    // if not empty
    if (letter !== ' ') {
      // if repeat add one
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else { // else initialize count to 1
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};


// TEST CODE
const runTest = function() {
  const result = countLetters("Lighthouse Labs");
  assertEqual(result['L'], 2);
  assertEqual(result['i'], 1);
  assertEqual(result['g'], 1);
  assertEqual(result['h'], 2);
  assertEqual(result['t'], 1);
  assertEqual(result['o'], 1);
  assertEqual(result['u'], 1);
  assertEqual(result['s'], 1);
  assertEqual(result['e'], 1);
  assertEqual(result['a'], 1);
  assertEqual(result['b'], 1);
};

runTest();

module.exports = countLetters;