// myApp.js

// 1. Cargar las variables de entorno desde el archivo .env
require('dotenv').config(); 

let express = require('express');

console.log("Hello World"); 

let app = express();

// ----------------------------------------------------------------------
// AÑADIDO: Middleware de Registro (Logger)
// ----------------------------------------------------------------------
app.use(function(req, res, next) {
    // Formato requerido: method path - ip
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    
    // Llamar a next() es crucial para pasar el control al siguiente handler (la ruta)
    next();
});
// ----------------------------------------------------------------------


// Configuración de recursos estáticos
const absolutePathToPublic = __dirname + '/public';
app.use('/public', express.static(absolutePathToPublic));

// Definición de la ruta raíz (desafío anterior)
const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});

// Sirve JSON en una ruta específica (/json) y usa .env
app.get('/json', function(req, res) {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
});

module.exports = app;
