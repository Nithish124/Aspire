const _=require('lodash')
const item=[1,[2,3,[4,5]]];
const newit=_.flattenDeep(item);
console.log(newit);