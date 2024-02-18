// FUNCTION IMPLEMENTATION
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

// eqObjects function compare two objects if they are equal
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  //implement eqObjects here
  // initialize with creating two objects and key
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //implement comparison, if both are diff = false
  if (keys1.length !== keys2.length) {
    return false;
  }
      
    // first check the values of the keys for obj then check for arr, then for value
  for (const key of keys1) {
    // check value of current object1.key is an object
    if (typeof object1[key] == 'object' && !Array.isArray(object1[key])) {
      // use !eqObjects, within nested obj
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } 
    // check value of object.key1 is in array
    else if (Array.isArray(object1[key])) {
      // equality check of keys
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } 
    // if not obj or arr, compare
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};
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


/* OLD TEST CODE
// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// TEST CODES 2
console.log("--------------")
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
*/