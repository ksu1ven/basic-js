const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(order) {
    this.order=(order===false)? false:true
    }
      createSquare() {
    let square=[];
    for(let i=0; i<26; i++) {
    square.push([])
    for(let j=i+65; j<91+i; j++) {
    if(j<91){ square[i].push(String.fromCharCode(j))
    } else {
    j=j-26;
    square[i].push(String.fromCharCode(j));
    j=j+26
    }
    }
    }
    return square
    }
  encrypt(a, b) {
    if(!a||!b) {throw new Error ('Incorrect arguments!')}
const square=this.createSquare();
a=a.toUpperCase().split('')
b=b.toUpperCase().split('')
console.log(a)
let result=[];
let indexesA=[];
let indexesB=[];
let cyclesNumber=Math.ceil(a.length/b.length);
for(let i=0; i< cyclesNumber; i++) {
for(let j=0; j< b.length; j++) {
indexesB.push(square[0].indexOf(b[j]));
}
}
for(let i=0; i< a.length; i++) {
indexesA.push(square[0].indexOf(a[i]))
if(indexesA[i]===-1) {indexesB.splice(i, 0, -1 );
result.push(a[i])
} else {result.push(square[indexesA[i]] [indexesB[i]])
}
}
if(this.order==false) {result.reverse()}
result=result.join('');
return result
  }
  decrypt(a, b) {
    if(!a||!b) {throw new Error ('Incorrect arguments!')}
const square=this.createSquare();
a=a.toUpperCase().split('')
b=b.toUpperCase().split('')
console.log(a)
let result=[];
let indexesA=[];
let indexesB=[];
let cyclesNumber=Math.ceil(a.length/b.length);
for(let i=0; i< cyclesNumber; i++) {
for(let j=0; j< b.length; j++) {
indexesB.push(square[0].indexOf(b[j]));
}
}
for(let i=0; i< a.length; i++) {
indexesA.push(square[indexesB[i]].indexOf(a[i]))
if(indexesA[i]===-1) {indexesB.splice(i, 0, -1 );
} 
}
for(let i=0; i< a.length; i++) {
if(indexesA[i]==-1) { result.push(a[i]) } else {
result.push(String.fromCharCode(indexesA[i]+65))}
}
if(this.order==false) {result.reverse()}
result=result.join('')
return result
 
  }
}

module.exports = {
  VigenereCipheringMachine
};
