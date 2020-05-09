// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor (sides, dice) {
  this.sides = sides;
  this.dice = dice;
  this.history = [];
  }

  roll() {
    result =  (Math.random() * this.sides) * this.dice;
    this.history.push(result);
    return result; 
  }

  history() {
    return this.history;
  }
}

module.exports = { DiceRoller };
