// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line

  // check both objects = same keys
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  

  // check for keys being equal
  let valuesMatch = true;
  for (const key of actualKeys) {
    if (actual[key] !== expected[key]) {
      valuesMatch = false;
    }
  }

  let message;
  if (valuesMatch) { 
    message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else { 
    message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  
  console.log(message);
};



assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // Should pass
assertObjectsEqual({ a: '1', b: 2 }, { b: 3, a: '1' }); // Should fail
