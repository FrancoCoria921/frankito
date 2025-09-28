// myApp.js

// Carga las variables de entorno
require('dotenv').config(); 

let express = require('express');
let bodyParser = require('body-parser'); 
let mongoose = require('mongoose'); // <-- Cumple con "require mongoose"

/** # MONGOOSE SETUP #
/*  ================== */

/** 1) Install & Set up mongoose */
// <-- Cumple con la sintaxis exacta de conexión (incluyendo las opciones)
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


// Desafío: "Hello World" en la consola
console.log("Hello World"); 

let app = express();
// ... (El resto del código de rutas y middlewares sigue aquí)

// MIDDLEWARE DE BODY-PARSER
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
// ... (Todas tus rutas)
app.get('/:word/echo', function(req, res) {
    const word = req.params.word;
    res.json({ echo: word });
});

app.get('/now', 
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    }, 
    function(req, res) {
        res.json({ time: req.time });
    }
);

app.route('/name')
    .get(function(req, res) {
        const fullName = `${req.query.first} ${req.query.last}`;
        res.json({ name: fullName });
    })
    .post(function(req, res) {
        const fullName = `${req.body.first} ${req.body.last}`;
        res.json({ name: fullName });
    });

app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ "message": message });
});

const absolutePathToIndex = __dirname + '/views/index.html'; 
app.get('/', function(req, res) {
  res.sendFile(absolutePathToIndex);
});

module.exports = app;
