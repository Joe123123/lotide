const flatten = function(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let el of item) {
        res.push(el);
      }
    } else {
      res.push(item);
    }
  }
  return res;
};

module.exports = flatten;
