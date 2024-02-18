
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  it('should return empty array with one or two elements', () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return middle element for arrays odd length', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return two middle elements for arrays even length', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

/*/TEST CODES
// one/two element = no middle = return empty
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// odd number = middle determined
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// even number = two elements in the middle returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); */