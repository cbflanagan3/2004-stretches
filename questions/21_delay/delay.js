const delay = (str, time) => {
  //Your code here
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  }).then(function() {
    return str;
  })
};

module.exports = { delay };
