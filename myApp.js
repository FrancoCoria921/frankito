// myApp.js

// 1. Cargar las variables de entorno desde el archivo .env
require('dotenv').config(); 

let express = require('express');

// Desafío "Bienvenido a la consola de Node"
console.log("Hello World"); 

let app = express();

// 2. Sirve Recursos Estáticos (Middleware)
// Monta el middleware express.static a la ruta /public
const absolutePathToPublic = __dirname + '/public';
app.use('/public', express.static(absolutePathToPublic));

// 3. Sirve un Archivo HTML (Ruta raíz /)
// El __dirname + '/views/index.html'
const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});

// 4. Sirve JSON en una ruta específica (/json) y usa .env
app.get('/json', function(req, res) {
  let message = "Hello json";
  
  // Accede a process.env.MESSAGE_STYLE y aplica la lógica
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
});

module.exports = app;
