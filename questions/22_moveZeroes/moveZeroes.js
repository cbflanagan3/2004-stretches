const moveZeroes = (arr) => {
  //YOUR CODE HERE
  let newArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] === 0) {
      newArr = arr.splice(i, 1);
      arr.push(newArr[0]);
    }
  }

  return arr;
};

module.exports = { moveZeroes };
