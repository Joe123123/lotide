const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄😄😄Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(arr, obj) {
  let res = {};
  for (let item of arr) {
    if (obj[item]) {
      res[item] ? (res[item] += 1) : (res[item] = 1);
    }
  }
  return res;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});

assertEqual(result1, { Fang: 2, Jason: 1 });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
