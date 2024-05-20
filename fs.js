const{readFileSync , writeFileSync}=require('fs');
const first=readFileSync('./first.txt','utf8');
const second=readFileSync('./sec.txt','utf8');
console.log(first,second);
writeFileSync('./res.txt',`Here is the result: ${first},${second}`);
const res=readFileSync('./res.txt','utf8');
console.log(res);