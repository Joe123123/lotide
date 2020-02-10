const findKey = (obj, cb) => {
  let res;
  for (let key in obj) {
    if (cb(obj[key])) {
      return (res = key);
    }
  }
  return res;
};
module.exports = findKey;
