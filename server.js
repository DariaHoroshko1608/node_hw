const http = require('http');
const {parse} = require("node:url");
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    const parsedUrl = parse(req.url , true);
    const query = parsedUrl.query;

    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`You passed the parameters: ${JSON.stringify(query)}`);
    }


    // console.log(`Метод: ${req.method}, URL: ${req.url}`);
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello World!');
})
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
const server2 = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Main</h1>');
    } else if (req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: '<h1>JSON</h1>'}));
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }

})
server2.listen(4000, () => {
    console.log('Server started on port 4000');
})


const server3 = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Data obtained: ${body}`);
        });
    } else if (req.method === 'GET') {
        if (req.url === '/') {
            const filePath = path.join(__dirname, 'index.html');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Page Not Found');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About page');
        } else if (req.url === '/contact') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Contacts');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page is not found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server3.listen(5000, ()=> {
    console.log('Server started on port 5000');
})
