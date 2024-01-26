// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅pass✅✅✅: ${actual} = ${expected}`);
  } else {
    console.log(`🛑🛑🛑fail🛑🛑🛑: ${actual} != ${expected}`);
  }
};


// TEST CODE
const runTest = function() {
  assertEqual("Lighthouse Labs", "Bootcamp");

  assertEqual(1, 1);
};

runTest();
