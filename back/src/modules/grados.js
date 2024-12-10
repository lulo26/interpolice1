const express = require("express");
const bd = require("./bd.js");
const grados = express();

grados.get("/api/grados/listartodos", (req, res) => {
    let query =
      "SELECT * FROM grados";
    bd.query(query, (error, grados) => {
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
          grados: grados,
        });
      }
    });
  });

  grados.post("/api/grados/crear", (req, res) => {
  let frmGradosDatos = {
    grado_delito: req.body.nombre,
    descripcion_grado: req.body.descripcion,
  };

  // hacemos la consulta

  let query = "INSERT INTO grados SET ?";

  bd.query(query, [frmGradosDatos], (error, grados) => {
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
        grados: grados,
      });
    }
  });
});

// editar ciudadano

grados.put("/api/grados/editar/:id", (req, res) => {
  let id = req.params.id;
  let frmDatos = {
    grado_delito: req.body.nombre,
    descripcion_grado: req.body.descripcion,
  };

  let query = "UPDATE grados SET ? WHERE idgrado_delito = ?";

  bd.query(query, [frmDatos, id], (error, grados) => {
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
        grados: grados,
      });
    }
  });
});

grados.delete("/api/grados/borrar/:id", (req, res) => {
  let id = req.params.id;

  let consulta = "DELETE FROM grados WHERE idgrado_delito = ?";

  bd.query(consulta, [id], (error, grados) => {
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
        grados: grados,
      });
    }
  });
}); 

module.exports = grados;