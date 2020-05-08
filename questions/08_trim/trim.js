// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // YOUR CODE [];
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === undefined || obj[key] === null) {
      delete obj[key];
    }
  })
    return obj;

  // let trashArr = [];
  // entries = Object.entries(obj);
  // for (let i = 0; i < entries.length; i++) {
  //   if (entries[i] === null || entries[i] === undefined) {
  //     trashArr.push(entries[i] && entries[i-1]);
  //   } 
  // }
  // let newObj = Object.fromEntries(entries);
  // return newObj;
};

module.exports = { trim };
