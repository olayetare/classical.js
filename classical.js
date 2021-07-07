const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) =>{
    response,statusCode = 200;
    
    
    if (request.url === '/') {
        response,setHeader('content-Type', 'text/html');
        fs.readFile(',/pages/index.html', (err,data)=>{
            response.end(data);
        })

    }
else if (request.url ==='/contact') {
    response.setHeader('content-Type', 'text/html');
    fs.readFile('./pages/contact.html', (err,data)=>{
        response.end(data);
    })
    }
else if (request.url === '/about' || request.url === '/about-us') {
    response.setHeader('content-Type', 'text/html');
    fs.readFile('./pages/about.html', (err,data)=>{
        response.end(data);
    })
}
else {
    response.setHeader('content-Type', 'text/html');
    fs.readFile(''./pages/error.html', (err,data)=>{
        response.end(data);
    })
}
console.log(request.url);
}).listen(port, hostname, ()=>{
    console.log('Server running at http://${hostname}:${port}')

});