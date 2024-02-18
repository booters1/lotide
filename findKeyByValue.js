const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value){
  for (const key of Object.keys (object)) {
    if(object[key] === value) { //check for value === to given key
      return key;

    }
  }
  return undefined;
};

// TEST CODE
const runTest = function() {
  const foodIdentifier = {
    fruit: "Apple",
    meat: "Steak",
    vegetable: "Broccoli",
    dairy: "Milk"

  };

  assertEqual(findKeyByValue(foodIdentifier, "Apple"), "fruit");
  assertEqual(findKeyByValue(foodIdentifier, "Steak"), "meat");
  assertEqual(findKeyByValue(foodIdentifier, "Apple"), "vegetable");
};

runTest();


module.exports = findKeyByValue;