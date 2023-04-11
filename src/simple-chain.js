const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length
  },
  addLink(value) {
    if (value===undefined) {this.chain.push("( )"); this.chain.push(`~~`)}
    else if(value!==undefined) {
    this.chain.push(`( ${value} )`);
    this.chain.push(`~~`);}
    this.length++
    console.log(this.chain)
    return this
  },
  removeLink(position) {
    if(typeof position !='number' && position %1!=0 || position<=0) {this.chain=[]; throw new Error('You can\'t remove incorrect link!');}
    let count=2*position-3
    if(position==1) {count=0}
    if(this.chain[count+1]) {this.chain.splice(count, 2);
    this.length--} else {this.chain=[]; throw new Error('You can\'t remove incorrect link!'); }
    console.log(this.chain)
    return this
  },
  reverseChain() {
    this.chain.reverse();
    this.chain.shift();
    if(this.chain.length !==0) {this.chain.push(`~~`)}
    console.log(this.chain)
    return this;
  },
  finishChain() {
  this.chain.pop();
  this.chain=this.chain.join('');
  let result=this.chain;
  this.chain=[]
  console.log(this.chain )
  return result
  }
};



module.exports = {
  chainMaker
};
