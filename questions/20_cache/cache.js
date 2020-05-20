// see test specs

function cache(func) {
  // YOUR CODE
  if (typeof func != 'function') {
    throw 'Input must be a function.';
  }
  const cache = {};
  return function(){
    var key = JSON.stringify(arguments);
    if(cache[key]){
      return cache[key];
    }
  else{
    val = func.apply(this, arguments);
    cache[key] = val;
    return val;
  }
 }
}

module.exports = { cache };
