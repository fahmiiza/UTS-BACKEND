// Import modul HTTP dan Querystring 
const http = require("http");
const qs = require("querystring");
// Membuat server HTTP
const server = http.createServer (function (request, response) { 
    response.writeHead (200, { "Content-Type": "text/html" });

    if (request.url == "/") {
        switch (request.method) {
            case "GET":
    // Tampilkan formulir jika request klien metode GET 
                response.end(
                    "<h2>Demo Penanganan Form</h2>" +
                    '<form action="/" method="post">' +
                   " Nama: <br>" +
                   '<input type="text" name="nama"><br><br>' +
                   " Email:<br>" +
                    '<input type="email" name="email"><br><br>' +
                    '<input type="submit" name="btnSubmit" value="Kirim">'+
                    "</form>"
                );

                break;
             case "POST":
                let body = "";

                // Ambil data dari form jika request klien Method POST 
                request.on("data", function (data) {
                    body += data;
                });
                // Parsing seluruh data yang dikirim lewat form 
                request.on("end", function () {
                    const form = qs.parse(body);
                // Menampilkan data yang dikirimkan oleh pengguna 
                    response.end(
                        "Data yang dikirim:<br>" +
                        "Nama:" + 
                        form["nama"] +
                        "<br>" +
                        "Email: " + 
                        form["email"]
                    );
                });
                break; 
            default:
                response.end("Metode pengiriman tidak dikenal");
        }
    }
});
// Buat server berjalan pada port 3000 
server.listen(3000);
// Menampilkan pesan ketika server berjalan 
console.log("Server Berjalan Lancar");
    