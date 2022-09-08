
/**
 * Window object is created by the browser. It represents a window in the brower . It is a browser object and not a JS Object.
 * Seconadly Node has no window object , bcz it is browser . NOde is used on service side for building backend usually . 
 * It may be used on frontend. 
 */

// GLOBAL
/**
 * These variables that are global to the application and can be used anywhere in the application . Eg
 * __dirname : path to current directory.
 * __filename : file name
 * require : function to use common modules (CommonJS)
 * module : info about current module
 * process : info about env where the program is being executed.
 */

// Methods like setInterval() and setTimeout().

console.log(__dirname)
setInterval(()=>{
    console.log('Harkanwal Grewal')
},1000)

setTimeout(() => {
console.log('I am Timeouting')
},10000)


