const http = require('http')

const server = http.createServer((req,res)=>{
 
if(req.url === '/'){
    res.end("Welcome to the Grewal Land.")
}else if(req.url === '/about'){
    res.end("I belong from Patiala Punjab.")
}else{
res.end(`
<h1>Oops Page Not Found (404) </h1>
<a href = "/">Back Home</a>
`)
}

 });


 server.listen(5000);