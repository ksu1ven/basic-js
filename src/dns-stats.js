const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
  function getDNSStats(domains) {
    let count=0;
    let result=[];
    let object={};
    if (domains.length==0) return object;
    domains=domains.map((domain)=> domain.split('.').reverse());
    console.log(domains) 
    domains.sort(function(a, b) {
      return b.length - a.length;
    });
    console.log(domains)
    while(domains[0].length>1){
      domains.forEach((domain) => {
        result.push(`.${domain[0]}`)
        object[`.${domain[0]}`]=result.length;
          domain[0]+='.'+domain[1];
          domain.splice(1,1)
    })
    result=[]
 }
for (let i=0; i<domains.length;i++) {
  if(!domains[i][0].includes('undefined')){object[`.${domains[i][0]}`]=1;}
}
 return object
}



module.exports = {
  getDNSStats
};
