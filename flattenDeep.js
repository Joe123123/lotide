const flattenDeep = function(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flattenDeep(item));
    } else {
      res.push(item);
    }
  }
  return res;
};
module.exports = flattenDeep;
