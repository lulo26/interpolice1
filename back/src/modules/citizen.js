// Modulo para administrar la info de los ciudadanos
const express = require("express");
const bd = require("./bd.js");
const citizen = express();

// mostrtar los ciudadanos
citizen.get("/api/citizen/listartodos", (req, res) => {
  let query = "SELECT * FROM ciudadanos order by nombre asc";
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
    apodo: req.body.apodo,
    email: req.body.email,
    password: req.body.password,
    fecha: req.body.fecha,
    especie: req.body.especie,
    rol: req.body.rol,
    foto: req.body.foto,
  };

  // hacemos la consulta

  let query = "INSERT INTO aprendiz SET ?";

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
