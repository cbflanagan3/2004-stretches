const findBy = (arr, key, value) => {
  //YOUR CODE HERE
  let found = arr.find(({ key })  => key === value);
 
  return found;

}
module.exports = { findBy };
