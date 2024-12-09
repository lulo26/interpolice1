// Instancia de express : sirve para crear api rest

const express = require("express");

// activamos cors
const cors = require("cors");

// instanciamos la conexion a la bd

const app = express(); // invocamos el método constructor de la clase express

require('dotenv').config()
//let permitidas = {};

app.use(cors());
app.use(express.json()); // serializar los request y response

app.use("/", require("./src/modules/citizen.js"));

const port = process.env.PORT || 4200

app.listen(port, () => {
  console.log(`api rest encendida en el puerto 4200`);
});
