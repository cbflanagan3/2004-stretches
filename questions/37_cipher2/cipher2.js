<<<<<<< HEAD
const decypher = (str) => {
  let newStr = '';
  let charCode = '';
  for (let i = 0; i < str.length; i++) {
    if (typeof str.charAt(i) === 'number') {
      charCode += str.charAt(i);
    }
  }
  let charCodeStr = String.fromCharCode(charCode);
  newStr += charCodeStr;
  let secondChar = str.slice(-1);
  newStr += secondChar;
  for(let i = 0; i <str.length - 1; i++) {
    if (typeof str.charAt(i) != 'number') {
      newStr += str.charAt(i);
    }
  }
  let lastChar = newStr.slice(2)
  newStr += lastChar;
  return newStr;
=======
const decypher = () => {
>>>>>>> b994823313926a9c8f9f8dbf85f03796c93b727c
  //YOUR CODE HERE
};
module.exports = { decypher };
