function onlyEven (array) {
  // your code here
  return array.filter(function (num) {
   return num % 2 === 0;
 });
};

function onlyOneWord (array) {
  // your code here
  return array.filter(function (phrase) {
    return phrase.split(' ').length <= 1;
  });
};

function positiveRowsOnly (array) {
  // your code here
  return array.filter(function (row) {
    return row.filter(function (num) {
      return num > 0;
    }).length === row.length;
  });
};

function allSameVowels (array) {
  // your code here
  return array.filter(function (word) {
    var vowels = ['a','e','i','o','u'];
    var wordVowels = word.split('').filter(function (letter) {
      return vowels.indexOf(letter) !== -1;
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
