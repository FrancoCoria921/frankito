// myApp.js
let express = require('express');

// La línea console.log("Hello World"); del desafío anterior se queda aquí.
console.log("Hello World"); 

let app = express();

// ----------------------------------------------------------------------
// AÑADE ESTE CÓDIGO AQUÍ:
// Define una ruta GET para la URL raíz (PATH: '/')
app.get('/', function(req, res) {
  // El método res.send() envía la cadena como respuesta HTTP
  res.send('Hello Express');
});
// ----------------------------------------------------------------------

module.exports = app;
