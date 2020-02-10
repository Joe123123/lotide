const countOnly = function(arr, obj) {
  let res = {};
  for (let item of arr) {
    if (obj[item]) {
      res[item] ? (res[item] += 1) : (res[item] = 1);
    }
  }
  return res;
};

module.exports = countOnly;
