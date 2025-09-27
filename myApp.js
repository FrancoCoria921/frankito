// myApp.js

// Carga las variables de entorno desde el archivo .env
require('dotenv').config(); 

let express = require('express');

// Desafío: "Hello World" en la consola
console.log("Hello World"); 

let app = express();

// ----------------------------------------------------------------------
// MIDDLEWARE DE REGISTRO (LOGGER)
// Desafío: Implementa un Middleware de registro de peticiones a nivel raíz
// ----------------------------------------------------------------------
app.use(function(req, res, next) {
    // Formato: method path - ip
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// ----------------------------------------------------------------------
// MIDDLEWARE PARA RECURSOS ESTÁTICOS
// Desafío: Sirve recursos estáticos (/public)
// ----------------------------------------------------------------------
const absolutePathToPublic = __dirname + '/public';
app.use('/public', express.static(absolutePathToPublic));

// ----------------------------------------------------------------------
// RUTAS
// ----------------------------------------------------------------------

// Desafío: Encadenando Middlewares para crear un servidor horario
// Ruta GET para /now
app.get('/now', 
    // 1. FUNCIÓN MIDDLEWARE: Añade la hora actual a req.time
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    }, 
    // 2. FUNCIÓN HANDLER FINAL: Responde con {time: req.time}
    function(req, res) {
        res.json({
            time: req.time
        });
    }
);


// Desafío: Sirve JSON en una ruta específica (/json) y usa .env
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

// Desafío: Sirve un archivo HTML (Ruta raíz /)
// NOTA: Si necesitas que el test de FCC pase el desafío de "Hello Express"
// temporalmente, usa res.send('Hello Express');
// Una vez que el test haya pasado, cambia a res.sendFile(...)
const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});


module.exports = app;
