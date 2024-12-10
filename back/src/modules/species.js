const express = require("express");
const bd = require("./bd.js");
const species = express();

// mostrar especies
species.get("/api/species/listarespecies", (req, res) => {
  let query = "SELECT * FROM especies order by nombre_especie asc";
  bd.query(query, (error, species) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrió un error en la consulta!",
        error: error,
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "consulta exitosa",
        species: species,
      });
    }
  });
});

module.exports = species;
