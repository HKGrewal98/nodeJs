//  ( NPM) Node Package Manager
/**
 * Reuse our code in other projects .
 * Reuse the code written by other developers.
 * Lastly share our own solutions with other developers as well.
 */

/**
 * NPM calls reusable code as packages , which basicaly contains files that contain code in JS.
 * Other names are modules and dependencies and packages all mean the same.
 * There is no quality control in NPM , so it is upto you to get the best packages.
 */

// npm version
// npm version or npm --v


// local dependency ---- use it in this particular object only 
// npm i <packageName> 

// global dependency ----- use it any object
// npm install -g <packageName> (window)
// sudo install -g <packageName> (mac) 

// With the arrival of npx there is less need to set up dependencies globally.


/**
 * package.json manifest file (stores important information about the project/package)
 * THREE WAYS U CAN package.json FILE (manifest file)
 * 1 : manual approch (create package.json in the root , create properties etc.)
 * 2 : npm init (step by step , press enter to skip)
 * 3 : npm init -y (everything default)
 */

// once i create the package.json file all the dependencies info will be maintained here
// *** IMP ***
// all the dependencies code is present in the node_modules folder that is created on its own.


// external modules are not commited to git.
// here is the magic , when i clone a repo and run npm install , it actually takes help of package.json file to know what folders are needed 
// for project steup.

// Just for practise

const _ = require('lodash')

const items = [1,[2],[3,[4]]]

const newItems = _.flattenDeep(items);
console.log(newItems);



