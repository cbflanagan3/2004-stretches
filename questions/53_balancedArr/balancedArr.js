const balanced = (arr) => {
  //YOUR CODE HERE
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let isum = 0
    issum = isum += arr[i];
    for (let j = arr.length; j > 0; j--) {
      let jsum = 0;
      jsum = jsum + arr[j];
      if (jsum === isum) {
        return arr[i]
      }
      else {
        return -1;
      }
    }
    
  }
 

  
};

module.exports = balanced;
