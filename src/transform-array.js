const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {throw new Error (`'arr' parameter must be an instance of the Array!`)}
  let arr2= arr.slice(0);
  for (let i=0; i<arr2.length; i++) {
    if(arr2[i]==='--discard-next') {
      if(arr2[i+1]) {arr2.splice(i,2, null); i=i-2} else {arr2.splice(i,1)}}    
    if(arr2[i]==='--discard-prev') {
      if(arr2[i-1]) {arr2.splice(i-1,2); i=i-2} else{arr2.splice(i,1); i=i-1} }  
    if(arr2[i]==='--double-next') {
      if(arr2[i+1]) {arr2.splice(i,1, arr2[i+1])} else {arr2.splice(i,1)}}
    if(arr2[i]==='--double-prev') {
      if(arr2[i-1]) {arr2.splice(i,1, arr2[i-1])} else {arr2.splice(i,1); i=i-1}}
    }
  let arrnext=arr2.filter(elem=> elem!==null)
  return arrnext
}

module.exports = {
  transform
};
