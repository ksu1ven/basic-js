const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str=String(str);
  let result=[];
  if(options.repeatTimes===undefined) {options.repeatTimes=1 }
  if(options.additionRepeatTimes===undefined) {options.additionRepeatTimes =1 }
  for (let i=0;i<options.repeatTimes; i++) {
  result.push([str])
  if(options.addition!==undefined) {
  options.addition=String(options.addition)
  result[i].push([]);
  for (let j=0;j<options.additionRepeatTimes; j++) {
  result[i][1].push(options.addition)
  }
  result[i][1]=result[i][1].join((options.additionSeparator)?`${options.additionSeparator}`:'|')
  }
  }
  result=result.map((elem)=> elem.join(''))
  result=result.join((options.separator)?`${options.separator}`:'+')
  return result
  }


module.exports = {
  repeater
};
