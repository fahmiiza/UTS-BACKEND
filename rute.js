const http = require("http");
const server = http.createServer((request, response) => { 
    if (request.url == "/") {
        response.end("<h2>Halaman Utama</h2>");
    } else if (request.url == "/katalog") { 
        response.end("<h2>Halaman Katalog</h2>");
    } else if (request.url == "/kontak") { 
        response.end("<h2>Halaman Kontak</h2>");
    } else {
    response.status = 404; // status HTTP untuk halaman tidak ditemukan 
    response.end("<h2>404: Halaman Tidak Ditemukan</h2>");
    }
});
server.listen(3000);
console.log("server berjalan lancar");