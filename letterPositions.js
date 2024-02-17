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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅pass✅✅✅: ${actual} = ${expected}`);
  } else {
    console.log(`🛑🛑🛑fail🛑🛑🛑: ${actual} != ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(actual, expected) {
  const message = eqArrays(actual, expected) ? '✅✅✅pass✅✅✅' : '🛑🛑🛑fail🛑🛑🛑';
  console.log(`${message}: [${actual}] === [${expected}]`);
};


// Test for the string "hello"
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);