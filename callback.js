const http = require("http");

const server = http.createServer((request, res) => {
    res.writeHead (200, { "Content-Type": "text/html" }); 


// Deklarasi function yang memiliki callback sebagai parameter 
function periksaDokter (nomerAntri, callback) {
    if (nomerAntri > 50) {
        callback(false); // Panggil callback dengan false jika nomor antri lebih dari 50 
    }   else if (nomerAntri < 10) {
        callback(true); // Panggil callback dengan true jika nomor antri kurang dari 10 
    }   else {
        // Panggil callback dengan nilai lain jika kondisi lainnya diperlukan
        callback('Kondisi lainnya');
    }
};



// Menjalankan function periksaDokter yang sebelumnya sudah dideklarasi 
periksaDokter (65, function (check) {
    if (check) {
        res.end('Sebentar lagi giliran saya');//Menampilkan dibrowser 
        console.log('Sebentar lagi giliran saya');//Menampilkan di consol
    
    } else {
        res.end('Silakan jalan-jalan dulu');
        console.log('Silakan jalan-jalan dulu');
    }
});

})
server.listen(3000);

console.log("Server berjalan pada http://127.0.0.1:3000/");
