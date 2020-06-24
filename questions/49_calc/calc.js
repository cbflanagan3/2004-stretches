// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  //write code here
  constructor(num) {
    this.num = num;
    if (typeof num != 'number') {
      throw new Error ('Must be number')
    }
  }

  add(num2) {
    return num2 += this.num;
  }

  sub(num2) {
    console.log(this.num -= num2);
  }

  mul(num2) {
    return this.num *= num2;
  }


}

module.exports = { chainCalc };
