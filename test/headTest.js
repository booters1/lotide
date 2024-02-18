

const assert = require('chai').assert;
const head   = require('../head');
const assertEqual = require('./assertEqual');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});


/* TEST CODE DONT NEED ANYMORE // saved for reference

const assertEqual = require('../assertEqual');
const head = require('../head'); 

const runTest = function() {
  assertEqual(head([5, 6, 7]), 5); // array with multiple elements --- pass
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // array of strings -- passss 
  assertEqual(head([19]), 20); //array with one element -- fails
  assertEqual(head([]), undefined); // empty array ---  passss
};

runTest();
*/
