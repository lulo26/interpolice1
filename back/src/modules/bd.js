// administracion de la conexión a la BD
// usando CALLBACKS

const mysql = require("mysql2");

const cnx = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "interpolice",
});

cnx.query("SELECT * FROM citizen", (err, results) => {
  console.log(results);
});
