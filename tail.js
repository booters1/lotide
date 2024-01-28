const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅pass✅✅✅: ${actual} = ${expected}`);
  } else {
    console.log(`🛑🛑🛑fail🛑🛑🛑: ${actual} != ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) { //check for element
    return arr.slice(1); // return a new array from 2nd element in array
  } else {
    return []; // return empty arrray for zero or one
  }
};

// TEST CODE

assertEqual("Lighthouse Labs", "Lighthouse Labs"); // pass
assertEqual(1, 1); // pass

const result1 = tail(["Zero", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // pass check length for 2
assertEqual(result1[0], "Lighthouse"); // pass check 1st element is lighthouse
assertEqual(result1[1], "Labs"); // pass check 2nd elembent is labs
assertEqual(result1[2], "Labs"); // fail check for 3rd element its undefined

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!