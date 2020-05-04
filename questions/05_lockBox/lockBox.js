const lockBox = (code, message) => {
  // write code here
  this.code = code;
  this.message = message;
  const modCode = (code, newCode) => {
    this.code = newCode;
  } 

  const modMessage = (message, newMessage) => {
    this.message = newMessage;
  }

  const revealMessage = (inputCode) => {
    if (inputCode != this.code) {
      throw new Error;
    } else {
      return this.message;
    }
  }
};

module.exports = { lockBox };
