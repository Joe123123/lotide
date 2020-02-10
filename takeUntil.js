const takeUntil = (arr, cb) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!cb(item)) {
      res.push(item);
    } else {
      return res;
    }
  }
  return res;
};

module.exports = takeUntil;
