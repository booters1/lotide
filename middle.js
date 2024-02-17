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

// ACTUAL FUNCTION
const middle = function(array) {
  // FIND MIDDLE INDEX ON LENGTH
  const middleIndex = Math.floor(array.length / 2);

  // CHECK FOR LENGTH IS 1 OR 2
  if (array.length <= 2) {
    return []; 
    // ARRAYS WITH ODD NUMBERS  = RETURN MIDDLE
  } else if (array.length % 2 === 1) { 
    return [array[middleIndex]]; 
    // ARRAYS WITH EVEN NUMBERS = RETURN MIDDLE TWO
  } else { 
    return [array[middleIndex - 1], array[middleIndex]]; 
  }
};

//TEST CODES
// one/two element = no middle = return empty
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// odd number = middle determined
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// even number = two elements in the middle returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);