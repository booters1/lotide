// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  // look thru ea key in object
  for (const key of Object.keys(object)) {

    // cb func to current key, if true = return key , if no key = undefined
    if (callback(object[key])) {
      console.log(`restauraunt Name: ${key} (# of stars: ${object[key].stars})`);
      return key;
    }
  }
  return undefined;
};

// TEST CODE
// TEST CASES
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}; //

const result = findKey(restaurants, x => x.stars === 2);
assertEqual(result, "noma");

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5)); // => return undefined
;

module.exports = findKey;


