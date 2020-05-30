// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe != 'object' || typeof supplies != 'object') {
    throw 'Not an object';
  }
  let cakes = 0;
  temp;

  for (var x in recipe) {
    for (var y in supplies) {
      if (x != y) {
        return 0;
      }
      else { 
        temp += x / y;
      } 
    }

  }

};

module.exports = { btownbake };
