// Modulo para administrar la info de los ciudadanos
const express = require("express");
const bd = require("./bd.js");
const citizen = express();

// mostrtar los ciudadanos
citizen.get("/api/citizen/listartodos", (req, res) => {
  let query =
    "SELECT * FROM ciudadanos inner join especies on idespecie = especies_idespecie inner join roles on idrol = roles_idrol order by nombre asc";
  bd.query(query, (error, citizen) => {
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

// crear ciudadano

citizen.post("/api/citizen/crear", (req, res) => {
  let frmCitizenDatos = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    apodo: req.body.apodo,
    password: req.body.password,
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
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    apodo: req.body.apodo,
    password: req.body.password,
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

module.exports = citizen;
