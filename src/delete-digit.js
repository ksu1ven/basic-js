const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
number=String(number).split('');
let arrOfVariants=[]
for (let i=0; i<number.length; i++) {
let variant;
if(i==0) {variant=number.slice(1).join('')}
else if(i==1) {variant=number.slice(0,1)+number.slice(i+1)
  variant=variant.split(',').join('')}
else {variant=number.slice(0,i-1)+number.slice(i)
variant=variant.split(',').join('')
}
arrOfVariants.push(+variant)
}
return Math.max.apply(null, arrOfVariants);
}



module.exports = {
  deleteDigit
};
