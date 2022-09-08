const os = require('os')

// userInfo
console.log(os.userInfo());

// System Uptime 
console.log(os.uptime());

const systemInfo = {
"name" : os.type(),
"release" : os.release(),
"TotalMem" : os.totalmem(),
"FreeMem" : os.freemem(),
}

console.log(systemInfo);

