// Instancia de express : sirve para crear api rest

const express = require("express");

// activamos cors
const cors = require("cors");

// instanciamos la conexion a la bd

const app = express(); // invocamos el método constructor de la clase express

const serverless = require("serverless-http");

const router = express.Router();


require('dotenv').config()
//let permitidas = {};

app.use(cors());
app.use(express.json()); // serializar los request y response

router.get("/", (req, res) => {
  res.send("App is running..");
});

app.get('/', (req, res) =>{
  res.status(200).send({
      status:"OK",
      mensaje: "Bienvenido a la API REST de interpolice",
  })
})

app.use("/", require("./src/modules/citizen"));
app.use("/", require("./src/modules/species"));

const port = process.env.PORT || 4200

app.listen(port, () => {
  console.log(`api rest encendida en el puerto 4200`);
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);