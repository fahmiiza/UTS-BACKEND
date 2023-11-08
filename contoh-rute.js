const http = require("http");
const server = http.createServer((request, response) => { 
    if (request.url == "/") {
    //Halaman Utama
    } else if (request.url == "/katalog") {
    //Halaman Katalog
    } else if (request.url == "/kontak") { 
        //halaman Kontak
    } else {
        //penanganan untuk halaman yang tidak ditemukan
    }
});

server.listen(3000);
console.log("Server berjalan lancar");