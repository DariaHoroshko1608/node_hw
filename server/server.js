const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader = function (contentType, textPlain) {
        
    };
    res.setHeader('Content-Type', 'text/plain');
    res.end = function (js) {
        
    };
    res.end("hello, Node.js!")
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log("hello, Node.js!")
})
