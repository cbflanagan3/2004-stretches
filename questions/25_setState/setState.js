// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.previousStates = [];
    this.state = initialState;
  }
  setState(newState) {
    // YOUR CODE
    this.previousStates.push(this.state);
    this.state = Object.assign({}, this.state, newState);
    return this.state;

  }

  goBack() {
    this.state = this.previousStates.pop();
    return this.state;
  }
}

module.exports = { StatefulThing };
