// administracion de la conexión a la BD
// usando CALLBACKS

const mysql = require("mysql2");

const cnx = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "interpolice",
});

cnx.connect((error) => {
  if (error) {
    console.log(`error en la conexion: \n ${error}`);
    // throw ""error en la cnexion aa la 80;
  } else {
    console.log("conexión existosa a la BD");
  }
});

module.exports = cnx;
