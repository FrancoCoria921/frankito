// myApp.js

// Carga las variables de entorno desde el archivo .env
require('dotenv').config(); 

// ----------------------------------------------------------------------
// 1. Requerir Mongoose
// ----------------------------------------------------------------------
let mongoose = require('mongoose');

// ----------------------------------------------------------------------
// 2. Conectarse a MongoDB usando la variable de entorno
// ----------------------------------------------------------------------
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conexión a MongoDB exitosa."))
    .catch(err => console.error("Error de conexión a MongoDB:", err));


let express = require('express');

// ... (El resto de tu código sigue aquí, desde console.log("Hello World") hacia abajo)
