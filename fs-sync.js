
// There are two ways of reading a file 
// one is Sync(blocking) and another is Async (non-blocking)

const { log } = require('console');
const {readFileSync,writeFileSync, appendFileSync} = require('fs');
const { setFlagsFromString } = require('v8');
// fs is an module and readFileSync is an object. As i know the key name i can straigtway initialize it ....
// const fs = require('fs') this is also the rightway , and the next step would be const readFileSync = fs.readFileSync.

const first = readFileSync("./content/first.txt",'utf8');
const seconad = readFileSync("./content/seconad.txt",'utf8');

console.log(first);
console.log(seconad);

writeFileSync('./content/result.txt',`This is the result : ${first} , ${seconad}`,{flag:'a'});
// Node bY default overides the info in the file , so it is lost
// so in order to append new info and keep the old , ADD the {flag : 'a'} property.
appendFileSync('./content/result.txt','File material ends.....');



log("All Done!")
