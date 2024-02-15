const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length > 1) { //check for element
    return arr.slice(1); // return a new array from 2nd element in array
  } else {
    return []; // return empty arrray for zero or one
  }
};

module.exports = tail;
