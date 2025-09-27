// myApp.js

// Carga las variables de entorno desde el archivo .env
require('dotenv').config(); 

let express = require('express');

// Requerir body-parser para analizar peticiones POST
let bodyParser = require('body-parser'); 

// Desafío: "Hello World" en la consola
console.log("Hello World"); 

let app = express();

// MIDDLEWARE DE BODY-PARSER (Debe ir ANTES de cualquier ruta POST)
// Analiza el cuerpo de las peticiones codificadas por URL (como formularios HTML)
app.use(bodyParser.urlencoded({ extended: false }));

// MIDDLEWARE DE REGISTRO (LOGGER)
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// MIDDLEWARE PARA RECURSOS ESTÁTICOS
const absolutePathToPublic = __dirname + '/public';
app.use('/public', express.static(absolutePathToPublic));

// ----------------------------------------------------------------------
// RUTAS
// ----------------------------------------------------------------------

// Ruta con Parámetros de Ruta (Echo Server)
app.get('/:word/echo', function(req, res) {
    const word = req.params.word;
    res.json({
        echo: word
    });
});


// Ruta con Middleware Encadenado (/now)
app.get('/now', 
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    }, 
    function(req, res) {
        res.json({
            time: req.time
        });
    }
);


// Ruta /name (Maneja GET con req.query y POST con req.body)
// Desafío completado: Obtén datos de las peticiones POST
app.route('/name')
    .get(function(req, res) {
        // Maneja GET (Query String)
        const firstName = req.query.first;
        const lastName = req.query.last;
        const fullName = `${firstName} ${lastName}`;
        
        res.json({
            name: fullName
        });
    })
    .post(function(req, res) {
        // Maneja POST (Body de la petición)
        // Los datos están en req.body gracias al middleware body-parser
        const firstName = req.body.first;
        const lastName = req.body.last;
        
        const fullName = `${firstName} ${lastName}`;
        
        res.json({
            name: fullName
        });
    });


// Ruta /json (Usa .env para mayúsculas)
app.get('/json', function(req, res) {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  
  res.json({
    "message": message
  });
});


// Ruta Raíz (Sirve HTML)
const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});


module.exports = app;
