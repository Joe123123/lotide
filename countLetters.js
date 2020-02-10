const countLetters = function(str) {
  let res = {};
  for (let letter of str) {
    if (letter !== " ") {
      res[letter] ? (res[letter] += 1) : (res[letter] = 1);
    }
  }
  return res;
};

module.exports = countLetters;
