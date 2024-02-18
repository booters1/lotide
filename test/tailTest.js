const tail = require('../tail'); 
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe('#tail', () => {
  it('should return an array without the first element', () => {
    const words = ["Zero", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
    assert.strictEqual(result.length, words.length - 1);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
    assert.strictEqual(words[0], "Yo Yo");
    assert.strictEqual(words[1], "Lighthouse");
    assert.strictEqual(words[2], "Labs");
  });
});

/*/ TEST CODE

assertEqual("Lighthouse Labs", "Lighthouse Labs"); // pass
assertEqual(1, 1); // pass

const result1 = tail(["Zero", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // pass check length for 2
assertEqual(result1[0], "Lighthouse"); // pass check 1st element is lighthouse
assertEqual(result1[1], "Labs"); // pass check 2nd elembent is labs
assertEqual(result1[2], "Labs"); // fail check for 3rd element its undefined

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
