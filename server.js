// server.js (CÓDIGO FINAL CORREGIDO)

'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

// Ya no necesitamos require('./myApp') si no existe, o si ponemos el código aquí.

if (!process.env.DISABLE_XORIGIN) {
  app.use(function(req, res, next) {
    var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    var origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });
  
// ----------------------------------------------------------------------
// 1. CAMBIO CLAVE: La ruta principal RESPONDE con "Hello World"
// Esto es lo que el test de FCC realmente busca en tu URL.
// ----------------------------------------------------------------------
app.route('/')
    .get(function(req, res) {
        res.send('Hello World'); 
    })

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

//Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  // ----------------------------------------------------------------------
  // 2. CAMBIO CLAVE: Imprimimos en la consola justo al inicio (Logs)
  // Esto es lo que el desafío dice literalmente que debe pasar.
  // ----------------------------------------------------------------------
  console.log("Hello World"); 
  console.log("Node.js listening on port " + listener.address().port);
});
