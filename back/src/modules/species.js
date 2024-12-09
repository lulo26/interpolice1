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

// crear especies

species.post("/api/species/crear", (req, res) => {
  let frmSpeciesDatos = {
    nombre_especie: req.body.nombre,
    apellido_ciudadano: req.body.apellido,
    email_ciudadano: req.body.email,
    apodo_ciudadano: req.body.apodo,
    password_ciudadano: req.body.password,
    fechaorigen: req.body.fecha,
    especies_idespecie: req.body.especie,
    roles_idrol: req.body.rol,
  };

  // hacemos la consulta

  let query = "INSERT INTO ciudadanos SET ?";

  bd.query(query, [frmCitizenDatos], (error, citizen) => {
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
        citizen: citizen,
      });
    }
  });
});

// editar ciudadano

citizen.put("/api/citizen/editar/:id", (req, res) => {
  let id = req.params.id;
  let frmDatos = {
    nombre_ciudadano: req.body.nombre,
    apellido_ciudadano: req.body.apellido,
    email_ciudadano: req.body.email,
    apodo_ciudadano: req.body.apodo,
    password_ciudadano: req.body.password,
    fechaorigen: req.body.fecha,
    especies_idespecie: req.body.especie,
    roles_idrol: req.body.rol,
  };

  let query = "UPDATE ciudadanos SET ? WHERE idciudadano = ?";

  bd.query(query, [frmDatos, id], (error, citizen) => {
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
        citizen: citizen,
      });
    }
  });
});

citizen.delete("/api/citizen/borrar/:id", (req, res) => {
  let id = req.params.id;

  let consulta = "DELETE FROM ciudadanos WHERE idciudadano = ?";

  bd.query(consulta, [id], (error, citizen) => {
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
        citizen: citizen,
      });
    }
  });
});

module.exports = species;
