const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("😄😄😄Assertion Passed: ", arr1, " === ", arr2);
  } else {
    console.log("😓😓😓Assertion Failed: ", arr1, " !== ", arr2);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter != " ") {
      results[letter] ? results[letter].push(i) : (results[letter] = [i]);
    }
  }
  return results;
};

let result = letterPositions("hello");

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);
