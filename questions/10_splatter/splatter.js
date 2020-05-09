//write the splatter function

const splatter = () => {
  //write code here
  let totalValue = 0;
  for (let key in arguments) {
    if (typeof key === Object) {
      splatter();
    } else {
      totalValue += key;
    }
  }
  return totalValue
};

module.exports = { splatter };
