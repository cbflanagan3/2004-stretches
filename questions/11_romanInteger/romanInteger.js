//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

let romArr = [
  [1, 'I'],
  [4, 'IV'],
  [5, 'V'],
  [9, 'IX'],
  [10,'X'],
  [40, 'XL'],
  [50, 'XV'],
  [90, 'XC'],
  [100, 'C'],
  [400, 'CD'],
  [500, 'D'],
  [900, 'CM'],
  [1000, 'M']
];


const romanInteger = (num) => {
  if (num <  1 || num > 3999) {
    throw 'Not a valid number';
  } 

 
  
  for (let i = 0; i < romArr.length; i++){
    if (num === romArr[i][0]) {
      return romArr[i][1];
      } 
      else if (num < romArr[i][0]) {
        return romArr[i-1][1] + romanInteger(num - romArr[i][0]);
      }
    } 
  

  //YOUR CODE HERE
};

module.exports = { romanInteger };
