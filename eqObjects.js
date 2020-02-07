const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
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
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let item of keys1) {
    if (Array.isArray(obj1[item])) {
      if (!eqArrays(obj1[item], obj2[item])) {
        return false;
      }
    } else if (typeof obj1[item] === "object") {
      if (!eqObjects(obj1[item], obj2[item])) {
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

const ab = { a: 1, b: 2 };
const ba = { b: 2, a: 1 };
const abc = { a: 1, b: 2, c: 3 };

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(
  eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), // => true
  eqObjects({ a: { z: { x: 9 } }, b: 2 }, { a: { z: { x: 9 } }, b: 2 }), // => true
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false)
);
