
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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
