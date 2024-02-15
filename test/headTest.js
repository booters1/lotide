const assertEqual = require('../assertEqual');
const head = require('../head'); 


// TEST CODE
const runTest = function() {
  assertEqual(head([5, 6, 7]), 5); // array with multiple elements --- pass
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // array of strings -- passss 
  assertEqual(head([19]), 20); //array with one element -- fails
  assertEqual(head([]), undefined); // empty array ---  passss
};

runTest();
