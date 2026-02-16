const http = require('http');
const fs = require('fs');
const abes = fs.readFileSync("abes.html");
const myServer=http.createServer((req,res)=>{
    res.statusCode=200;
    // res.setHeader("Content-Type","text/html");
    res.end(abes);
});
myServer.listen(5500,(req,res)=>{
console.log("server is running on port 5500");
});