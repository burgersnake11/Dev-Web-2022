var Cryptr = require('cryptr');
cryptr = new Cryptr('devnami');


var encstring = cryptr.encrypt('Devnami Youtube Channel');
var decstring = cryptr.decrypt(encstring);

console.log('===================================');
console.log(encstring);
console.log('===================================');
console.log(decstring);
console.log('===================================');