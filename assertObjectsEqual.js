const eqObjects = function(obj1, obj2) {
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
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (let item of keys1) {
    if (Array.isArray(obj1[item])) {
      if (!eqArrays(obj1[item], obj2[item])) {
        return false;
      }
    } else {
      if (obj1[item] !== obj2[item]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `😄😄😄Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `😓😓😓Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
