'use strict';

const source = [
  'rfd',true, 4, 'hello', 5, 12, -200, false, false, 'word',
  42, 'JS', null, undefined, 3.14, true, 'Node', -7,
  false, 'arrays', 0, NaN, 'types', true, -99, 1000,
];
const counts = { };
for (const value of source) {
  const type = value === null ? 'null' : typeof value;
    
  if(! Object.prototype.hasOwnProperty.call(counts, type))
  {
    counts[type] = 0;
  }
  counts[type] += 1;
}
console.log(counts);