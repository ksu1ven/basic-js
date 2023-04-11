const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
constructor() {
this.depth=1
this.arrlength=[]
this.arrWithDepth=[];
this.temporaryArr=[];}

calculateDepth(arr) {
this.arrlength.push(arr.length-1)
for(let i=0; i<arr.length; i++) {
if(Array.isArray(arr[i])) {
this.depth++
if (arr[i].length>0) {this.calculateDepth(arr[i]); } else{ this.arrWithDepth.push(this.depth)
this.depth=1; }} 
 else if ( i==arr.length-1 && !Array.isArray(arr[i]) ) {this.arrWithDepth.push(this.depth);
this.depth=1; 
}
if(i== this.arrlength[0] || this.arrlength[0]==-1) {
this.temporaryArr=this.arrWithDepth;
 this.arrWithDepth=[] ;
this.arrlength=[];
}
}
let result = Math.max.apply(null, this.temporaryArr);
return result
}
}

const depthCalc = new DepthCalculator()

module.exports = {
  DepthCalculator
};
