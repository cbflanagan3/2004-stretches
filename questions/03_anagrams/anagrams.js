// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let tempStr1 = str1.split('').sort().join();
    let tempStr2 = str2.split('').sort().join();
    if (tempStr1 != tempStr2) {
        return false;
    }
    return true;
}
module.exports = { checkAnagrams };
