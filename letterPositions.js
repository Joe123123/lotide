const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : (results[letter] = [i]);
    }
  }
  return results;
};
module.exports = letterPositions;
