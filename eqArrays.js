const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log(
  eqArrays(
    [[2, 3], [4], [5, [6, [7], 8], 9]],
    [[2, 3], [4], [5, [6, [7], 8], 9]]
  ), // => true

  eqArrays([[2, 3], [4]], [[2, 3], 4, 5]), // => false
  eqArrays([[2, 3], [4]], [[2, 3], 4])
); // => false
