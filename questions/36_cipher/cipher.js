const encrypt = (str) => {
  let newStr = '';
  let charCode = str.charCodeAt(0);
  newStr += charCode;
  let secondChar = str.slice(-1);
  newStr += secondChar;
  console.log(secondChar);
  for (let i = 2; i < str.length - 1; i++) {
    newStr += str.charAt(i);
  }
  newStr += str.charAt(1);
  return newStr;
};

module.exports = { encrypt };
