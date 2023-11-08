const http = require("http");

const server = http.createServer((request, response) => {
        response.writeHead (200, { "Content-Type": "text/html" }); 
        response.end("<h1>Hello Node.js</h1>");
    })
    server.listen(3000);
    
console.log("Server berjalan pada http://127.0.0.1:3000/");