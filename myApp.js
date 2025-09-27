// myApp.js
let express = require('express');

console.log("Hello World"); 

let app = express();

// Configuración de recursos estáticos (desafío anterior)
const absolutePathToPublic = __dirname + '/public';
app.use('/public', express.static(absolutePathToPublic));

// Definición de la ruta raíz (desafío anterior)
const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});

// ----------------------------------------------------------------------
// AÑADE ESTE CÓDIGO AQUÍ: Ruta GET para /json
// ----------------------------------------------------------------------

app.get('/json', function(req, res) {
  // El método res.json() convierte el objeto JS en una cadena JSON y lo envía.
  res.json({
    "message": "Hello json"
  });
});

// ----------------------------------------------------------------------

module.exports = app;
