const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
if (!Array.isArray(members)) return false
let dreamteam= members.filter(member=> typeof member ==='string');
dreamteam=dreamteam.map(member=>member.toUpperCase())
let dreamteamName=[];
dreamteam=dreamteam.map(function(member){
  for (let i=0; i<member.length; i++) {
    if(member[i]!==' ') {
      console.log(member[i])
      dreamteamName.push(member[i])
      break;
    } 
}})   
if(dreamteamName===[]) return false
dreamteamName= dreamteamName.sort()
dreamteamName=dreamteamName.join('')
return dreamteamName
}

module.exports = {
  createDreamTeam
};
