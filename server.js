// server.js

// Importamos el objeto app que exportamos de myApp.js
const app = require('./myApp'); 

// 1. OBTENER PUERTO Y HOST
// Railway automáticamente establece la variable PORT. 
// Usamos el host '0.0.0.0' para escuchar correctamente en el entorno de Railway.
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

// 2. INICIAR EL SERVIDOR
// Usamos host y port para asegurar el correcto binding en Railway.
app.listen(port, host, () => {
  console.log(`Node is listening on host ${host} and port ${port}...`);
});
