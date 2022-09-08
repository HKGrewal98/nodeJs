
// There are two ways of reading a file 
// one is Sync(blocking) and another is Async (non-blocking)

const { log } = require('console');
const {readFile,writeFile} = require('fs');
const { setFlagsFromString } = require('v8');
// fs is an module and readFileSync is an object. As i know the key name i can straigtway initialize it ....
// const fs = require('fs') this is also the rightway , and the next step would be const readFileSync = fs.readFileSync.

const path1 = "./content/first.txt";
const path2 = "./content/seconad.txt";
const result1 = "./content/result.txt";

readFile(path1,"utf8",(err,result)=>{
  if(err){
    log(err)
    return;
  }
  log(result);
  const first = result;

  readFile(path2,"utf8",(err,result)=>{
    if(err){
      log(err)
      return;
    }
    log(result);
    const seconad = result;
    writeFile(result1,`Here is the result : ${first} , ${seconad}`,(err,result)=>{
           if(err){
            log(err);
            return;
            }
          log(result);
        });

  });


});




log("All Done!")
