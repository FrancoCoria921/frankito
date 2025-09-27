// myApp.js
let express = require('express');

console.log("Hello World"); 

let app = express();

// ----------------------------------------------------------------------
// AÑADE ESTE CÓDIGO AQUÍ: Monta el middleware express.static
// ----------------------------------------------------------------------

// 1. Calcula la ruta absoluta al directorio 'public'
const absolutePathToPublic = __dirname + '/public';

// 2. Monta el middleware usando app.use()
// La ruta '/public' es el prefijo virtual que el cliente usará para acceder
app.use('/public', express.static(absolutePathToPublic));

// ----------------------------------------------------------------------

// Definición de la ruta raíz (desafío anterior)
const absolutePathToIndex = __dirname + '/views/index.html'; 

app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});

module.exports = app;
