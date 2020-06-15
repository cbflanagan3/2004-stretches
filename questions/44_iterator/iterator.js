// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr) {
    if (Array.isArray(arr) === false) {
      throw new Error ('Must be array');
    }
    this.arr = [];
    this.value = '';
    this.done = false
  }

  next() {
  
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.value = this.arr[i];
    }
    this.done = true;
  }
}

module.exports = { Iterator };
