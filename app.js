
// There are two ways of reading a file 
// one is Sync(blocking) and another is Async (non-blocking)

const { log } = require('console');
const {readFile,writeFile,readFileSync} = require('fs');
const { setFlagsFromString } = require('v8');
const util = require('util')

// Rather than util module to promsify call back functions i can simpley add
// require('fs').promises and bag all the functions by default at the back end will get added in the promisfy() function
// I do not need to call utils.promisfy(function name expecting callBack)

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// fs is an module and readFileSync is an object. As i know the key name i can straigtway initialize it ....
// const fs = require('fs') this is also the rightway , and the next step would be const readFileSync = fs.readFileSync.

const path1 = "./content/first.txt";
const path2 = "./content/seconad.txt";
const result1 = "./content/result1.txt";


// const getText = (path) => {
//    return new Promise((resolve,reject)=>{
    
//     log("I am here in the promise.")

//     readFile(path,"utf8",(err,result)=>{
       
//         if(err){
//             log(err)
//             return reject(err)
//     }
//               log(`File Data ${result}`)
//               return resolve(result)
// })

// const first = readFileSync(path,'utf8');
// log("Read the file in promise and returning")
// resolve(first)

//    })
// }// getText ends....


const writeText = (path,data) => {
    return new Promise((resolve,reject) => {
    
       writeFile(path,data,(err,result)=>{
           if(err){
               reject(err)
           }else{
               resolve("Successfully Added data in the file.")
           }
       })
    })
} // writeText ends....


// getText(path1)
// .then((result) => log(result))
// .catch((err)=> log(err))
// .finally(()=>log(`File readed on path ${path1}`))

// const start = async () => {
//     try{
//         const first = await getText(path1)
//         log(`In the start function and the response is ${first}`)
//         // const resp = await writeText(result1,first);
//         // log(`In the start function and the response is ${resp}`)
//     }catch(error){
//         log(error)
//      }
// }


const start = async () => {
    try{
        const first = await readFilePromise(path1,"utf8")
        log(`In the start function and the response is ${first}`)
        // const resp = await writeFilePromise(result1,first);
        // log(`In the start function and the response is ${resp}`)
    }catch(error){
        log(error)
     }
}

start() 

log("I am Here")
log("I am here 1")

start()

log("I am Here 2")
log("I am here 3")


// readFile(path1,"utf8",(err,result)=>{
//   if(err){
//     log(err)
//     return;
//   }
//   log(result);
//   const first = result;
//   });