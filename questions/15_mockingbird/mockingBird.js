// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(func(i));
  }
  return newArr;
};

// see test specs to complete this stretch

module.exports = { repeater };
