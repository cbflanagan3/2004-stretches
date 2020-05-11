const fizzBuzz = (num) => {
  if (num < 0 || typeof num != 'number' || typeof num !=  'bigint') {
    throw 'Not a valid number'
  }

  let newArray = [1];
  if (num === 1) {
    return newArray;
  } else if (num % 3 === 0 && num % 5 === 0) {
    newArray.push('FizzBuzz');
  } else if (num % 3 === 0) {
    newArray.push('Fizz');
  } else if (num % 5 === 0){
    newArray.push('Buzz');
  } else {
    newArray.push(newArray[0] + 1);
    fizzBuzz(num - 1);
  }

  return newArray;
};
module.exports = { fizzBuzz };
