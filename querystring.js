// Mengimpor modul yang diperlukan 
const http = require("http"); 
const url = require("url"); 
const qs = require("querystring");

// Membuat server HTTP
const server = http.createServer (function (request, response) { 
    // Mengambil query string dari URL yang diterima

    const query = url.parse(request.url).query;
    // Mem-parsing query string menjadi objek JavaScript 
    
    const parameters = qs.parse(query);
    // Menetapkan status kode dan tipe konten respons
    
    response.writeHead (200, { "Content-Type": "text/html" });
    // Menampilkan path dari URL dalam respons
    response.write(
        "<strong>Nama path:/katalog </strong>" + url.parse(request.url).pathname + "<br>Kategori<br>"
    );
    // Menampilkan daftar parameter dan nilainya dalam respons 
    response.write("<br><strong>Daftar parameter:</strong><br>"); 
    for (var property in parameters) {
        response.write(property + ":" + parameters [property] + "<br>");
    }
    // Mengakhiri respons
    response.end();
});
    // Jalankan server pada port 3000 
server.listen(3000);
    // Mencetak pesan ke konsol untuk menunjukkan server berjalan 
console.log("Server berjalan lancar");