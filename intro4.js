const path = require('path')

// platform specific path separator
console.log(path.sep);

// if i want to join the paths to get to a particular file or folder
// Keep in mind in this case system separator will be used.

const  folderPath = path.join('/content','subfolder','text.txt')

console.log(folderPath);

const baseName = path.basename(folderPath);

console.log(baseName);

const absPath = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absPath);