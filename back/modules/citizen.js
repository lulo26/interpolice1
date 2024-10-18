const express = require("express");
const bd = require("./bd.js");
const citizen = express();

citizen.get("/api/citizen/listartodos", (req, res) => {
  let query = "SELECT * FROM ciudadanos order by nombre ASC";
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
        aprendiz: aprendiz,
      });
    }
  });
});

// listar por apellido

citizen.get("api/citizen/listarporapellido/:apellido", (req, res) => {
  let apellido = req.params.apellido;
  let query = "SELECT * FROM ciudadanos WHERE apellido = ?";

  bd.query(query, [apellido], (error, aprendiz) => {
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
        aprendiz: aprendiz,
      });
    }
  });
});

// crear ciudadano : metodo post

citizen.post("/api/citizen/crear", (req, res) => {
  // recibir datos
  let frmDatos = {};

  let query = "INSERT INTO ciudadanos SET ?";

  bd.query(query, [frmDatos], (error, aprendiz) => {
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
        aprendiz: aprendiz,
      });
    }
  });
});

// eliminar ciudadano

citizen.delete("/api/citizen/borrarporid/:id", (req, res) => {
  let id = req.params.id;

  let query = "DELETE FROM ciudadano WHERE id = ?";

  bd.query(query, id, (error, aprendiz) => {
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
        aprendiz: aprendiz,
      });
    }
  });
});

// editar ciudadano

citizen.put("/api/citizen/editarporid/:id", (req, res) => {
  let id = req.params.id;
  let frmDatos = {};

  let query = "UPDATE ciudadano SET ? WHERE id_ ?";

  bd.query(query, [frmDatos, id], (error, aprendiz) => {
    if (error) {
      res.send({
        status: "error",
        mensaje: "ocurrió un error en la consulta!",
        error: error,
      });
    } else {
      res.send({
        status: "ok",
        mensaje: "actualización exitosa",
        aprendiz: aprendiz,
      });
    }
  });
});
