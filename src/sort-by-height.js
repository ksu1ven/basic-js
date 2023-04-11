const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function compareNumeric(a, b) {
  console.log(a +'<>'+b)
  if (a > b) return 1;
  if (a < b) return -1;
  console.log(a +'<>'+b)
}
function sortByHeight(arr) {
  let arrSorted=arr.filter((item)=> item !=-1)
  arrSorted.sort(compareNumeric);
  console.log(arrSorted)
  for (let i=0; i<arr.length;i++) {
    if (arr[i]==-1) {arrSorted.splice(i,0,-1)}
  }
  return arrSorted
}



module.exports = {
  sortByHeight
};
