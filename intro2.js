const {name} = require('./name');
const sayHi = require('./util')
const obj = require('./module-import')

console.log(obj.items)
console.log(obj.items[0])
console.log(obj.singlePerson)
console.log(obj.singlePerson.name)
sayHi.sayBye(name)

// Either i can access using the method reference like names.name
// or if i know the keys in the map , i can initialize straightway. NOTE the variable name should match with the keys in the map in order
// to extract the value. 

//console.log(name)
//sayHi('Harkanwal Grewal.')