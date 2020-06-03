//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  let newArr = [];
  let newObj = {};
  for (let key in obj) {
    if (!key.hasOWnProperty) {
      newArr.push(`${key}/`);
    } else {
      newArr.push(`${key}: ${obj[key]}`);
    }

  }
  for (let i =0; i< newArr.length; i++) {
    newObj[i] = newArr[i];
  }
  return newObj;
};

module.exports = { directory };
