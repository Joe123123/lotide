const eqArrays = require("./eqArrays");

const eqObjects = function(obj1, obj2) {
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
module.exports = eqObjects;
