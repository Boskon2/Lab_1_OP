const {inc:incValue} = require('./inc.js');
const a=5;
const b = incValue(a); 
console.dir({a, b});

const {inc:incRef} = require('./incRef.js');
const obj = { n: 5 }; 
incRef(obj); 
console.dir(obj);

require('./typesCount.js');
require('./typesCountDynamic.js');