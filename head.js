// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅pass✅✅✅: ${actual} = ${expected}`);
  } else {
    console.log(`🛑🛑🛑fail🛑🛑🛑: ${actual} != ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length > 0) {
    return arr[0]; // return the first element
  } else {
    return undefined; // return undefined for an empty array
  }
};

// TEST CODE
const runTest = function() {
  assertEqual(head([5, 6, 7]), 5); // array with multiple elements --- pass
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // array of strings -- passss 
  assertEqual(head([19]), 20); //array with one element -- fails
  assertEqual(head([]), undefined); // empty array ---  passss
};

runTest();
