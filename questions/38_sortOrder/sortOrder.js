/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, key, value) {
  console.log(key);
  let sortedArr = [];
  let objArr = [];
  console.log(objArr);
  const sortData = data.sort((x, y) => {
    return (x.key > y.key) ? 1 : -1
  });
  for( let d = 0; d < sortData.length; d++) {
    let obj = Object.entries(sortData[d]);
    objArr.push(obj);
  }
  for (let i = 0; i < objArr.length; i++) {
    let pair = objArr[i];
    for( let j = 0; j < pair.length; j++) {
      if (pair[j] = value) {
        sortedArr.push(pair[j+1]);
      }
    }
  }
  return sortedArr;
}

module.exports = { sortOrder };
