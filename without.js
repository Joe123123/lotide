const without = function(sourceArr, itemToRemoveArr) {
  let res = [];
  for (let item of sourceArr) {
    if (!itemToRemoveArr.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

module.exports = without;
