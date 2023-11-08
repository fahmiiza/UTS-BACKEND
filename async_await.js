const http = require("http");

const server = http.createServer(async(request, res) => {
    res.writeHead (200, { "Content-Type": "text/html" }); 


// Membuat Promise
var isMomHappy = true;
// Promise
var willIGetNewPhone = new Promise(function (resolve, reject) {
    if (isMomHappy) {
        var phone ={
            brand: "Samsung",
            color: "black",
        };
        resolve(phone); // fulfilled atau janji dipenuhi
 } else {
 var reason = new Error("mom is not happy");
 reject (reason); // reject (ingkar)
 }
});

// Menggunakan async/await untuk menunggu hasil Promise async 
    async function askMom() {
        try {
            const fulfilled = await willIGetNewPhone;
            
            console.log(fulfilled); // Outputkan janji terpenuhi ke konsol
            
            res.end(JSON.stringify(fulfilled)); // Mengirimkan hasil janji sebagai respons ke browser
        }   catch (error) {
            
            console.log(error.message); // Outputkan pesan kesalahan jika janji ditolak
        }
    }
    await askMom(); // Memanggil fungsi askMom yang mengandung janji
});

server.listen(3000);

console.log("Server berjalan pada http://127.0.0.1:3000/");
