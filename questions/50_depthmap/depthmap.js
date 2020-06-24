//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  //write code here
  if (typeof obj != 'object') {
    throw new Error ('Argument must be object');
  }
  return Object.keys(obj).reduce(function (previous, key) {
    if (typeof key === 'object') {
      recordDepth(key)
    } else {
      obj.depth = previous;
    }
  })
};

module.exports = { recordDepth };
