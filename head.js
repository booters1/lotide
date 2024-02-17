/*comment out for lotide refactor
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅pass✅✅✅: ${actual} = ${expected}`);
  } else {
    console.log(`🛑🛑🛑fail🛑🛑🛑: ${actual} != ${expected}`);
  }
};
*/

const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr.length > 0) {
    return arr[0]; // return the first element
  } else {
    return undefined; // return undefined for an empty array
  }
};

module.exports = head;
