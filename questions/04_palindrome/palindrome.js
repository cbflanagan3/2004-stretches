/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (var) => {
  //YOUR CODE
  let palArr = [];
  let newArr1 = [];
  let newArr2 = [];
  var.split(palArr);
  for (let i = 0; i < palArr.length; i++){
    newArr1.push(palArr[i]);
  }
  for (let j = palArr.length; j > 0; j--) {
    newArr2.push(palArr[j]);
  }
  if (newArr1 === newArr2) {
    return true;
  } else {
    return false;
  }
  
};

module.exports = { validPalindrome };
