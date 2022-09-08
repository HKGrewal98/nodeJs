const secret = "Super Secret" // want to keep this variable local.
const name = "Harkanwal Grewal" // want to share this variable in the application 

/**
 * Every file in the NOdeJs is a module and it has a export object , 
 * I can populate it myself what information to be shared with the other modules in the application and what not.
 * This means Encapsulation (Minimum sharing of the data ) or sharing of the data on your terms. 
 */

module.exports = {name}

//console.log(module)