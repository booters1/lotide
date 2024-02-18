const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('eqObjects', () => {
  describe('Basic functionality', () => {
    it('should return true for equal objects', () => {
      assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
    });
    
    it('should return false for objects with different nested values', () => {
      assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
    });
    
    it('should return false for objects with different keys', () => {
      assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
    });
    
    it('should return true for objects with nested arrays', () => {
      assert.isTrue(eqObjects({ a: { b: 1 }, c: [1, 2, 3] }, { a: { b: 1 }, c: [1, 2, 3] }));
    });
    
    it('should return false for objects with nested arrays in different order', () => {
      assert.isFalse(eqObjects({ a: { b: 1 }, c: [1, 2, 3] }, { a: { b: 1 }, c: [3, 2, 1] }));
    });
  });
});



/*
// NEW TEST CODE
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

assertEqual(eqObjects({ a: { b: 1 }, c: [1, 2, 3] }, { a: { b: 1 }, c: [1, 2, 3] }), true); // => true
assertEqual(eqObjects({ a: { b: 1 }, c: [1, 2, 3] }, { a: { b: 1 }, c: [3, 2, 1] }), false); // => false
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 2 }, b: 2 }), true); //fail
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), true); //fail
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // fail
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true); //fail
*/