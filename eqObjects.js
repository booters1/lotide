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
  // check through key 1 
  for (const key of keys1) {
    // check corresponding key in other object -- if not , return false
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
      
    // value given to keys to compare if they are same same or different
    const value1 = object1[key];
    const value2 = object2[key];
      
    // if value 1 = value 2 , we will compare using eqArrays func
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // if value 1 =/= value 2, compare by value
      if (value1 !== value2) {
        return false;
      }
    }
  }
    
    // if same same , return true
    return true;
  };

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true


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