// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let str1_arr = [];
  let str2_arr = [];
  for (let i = 0; i < str1.length; i++) {
    let str1[i] = char;
    str1_arr.push(char);
  }
  for (let i = 0; i < str2.length; i++) {
    let str2[i] = char;
    str2_arr.push(char);
  }
  str1_arr.sort();
  str2_arr.sort();
  for (let i = 0; i < str1_arr.length; i++) {
    let str1_arr[i] = char1;
    for (let j = 0; j < str2_arr.length; j++) {
      let srt2_arr[j] = char2;
      if (char1 === cha2) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
module.exports = { checkAnagrams };
