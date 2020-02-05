const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let res = {};
  for (let letter of str) {
    if (letter != " ") {
      res[letter] ? (res[letter] += 1) : (res[letter] = 1);
    }
  }
  return res;
};

let result = countLetters("lighthouse in L the house");
console.log(result);

assertEqual(result["l"], 1);
