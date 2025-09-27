// myApp.js
let express = require('express');

console.log("Hello World"); 

let app = express();

// ----------------------------------------------------------------------
// MODIFICACIÓN DE RUTA: Sirve el archivo index.html
// ----------------------------------------------------------------------

// __dirname es la variable global de Node que contiene la ruta absoluta 
// del directorio donde se encuentra myApp.js
const absolutePath = __dirname + '/views/index.html'; 

app.get('/', function(req, res) {
  // res.sendFile() requiere la ruta absoluta
  res.sendFile(absolutePath);
});

// ----------------------------------------------------------------------

module.exports = app;
