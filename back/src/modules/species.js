const express = require("express");
const bd = require("./bd.js");
const species = express();

// mostrar especies
species.get("/api/species/listarespecies", (req, res) => {
  let query = "SELECT * FROM especies";
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

species.post("/api/species/crear", (req, res) => {
  let frmSpeciesDatos = {
    nombre_especie: req.body.nombre,
  };

  // hacemos la consulta

  let query = "INSERT INTO especies SET ?";

  bd.query(query, [frmSpeciesDatos], (error, species) => {
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

// editar especie

species.put("/api/species/editar/:id", (req, res) => {
  let id = req.params.id;
  let frmDatos = {
    nombre_especie: req.body.nombre,
  };

  let query = "UPDATE species SET ? WHERE idespecie = ?";

  bd.query(query, [frmDatos, id], (error, species) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrió un error en la consulta",
        error: error,
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "actualización exitosa",
        species: species,
      });
    }
  });
});

species.delete("/api/species/borrar/:id", (req, res) => {
  let id = req.params.id;

  let consulta = "DELETE FROM especies WHERE idespecie = ?";

  bd.query(consulta, [id], (error, species) => {
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
