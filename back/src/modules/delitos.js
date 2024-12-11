const express = require("express");
const bd = require("./bd.js");
const delitos = express();

delitos.get("/api/delitos/listartodos", (req, res) => {
    let query =
      "SELECT * FROM delitos";
    bd.query(query, (error, delitos) => {
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
          delitos: delitos,
        });
      }
    });
  });

  delitos.post("/api/delitos/crear", (req, res) => {
  let frmDelitosDatos = {
    nombre_delito: req.body.nombre,
    descripcion_delito: req.body.descripcion,
    grado_delitos: req.body.grado,
  };

  // hacemos la consulta

  let query = "INSERT INTO delitos SET ?";

  bd.query(query, [frmDelitosDatos], (error, delitos) => {
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
        delitos: delitos,
      });
    }
  });
});

// editar ciudadano

delitos.put("/api/delitos/editar/:id", (req, res) => {
  let id = req.params.id;
  let frmDatos = {
    nombre_delito: req.body.nombre,
    descripcion_delito: req.body.descripcion,
    grado_delitos_idgrado_delito: req.body.grado,
  };

  let query = "UPDATE delitos SET ? WHERE iddelito = ?";

  bd.query(query, [frmDatos, id], (error, delitos) => {
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
        delitos: delitos,
      });
    }
  });
});

delitos.delete("/api/delitos/borrar/:id", (req, res) => {
  let id = req.params.id;

  let consulta = "DELETE FROM delitos WHERE iddelito = ?";

  bd.query(consulta, [id], (error, delitos) => {
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
        delitos: delitos,
      });
    }
  });
}); 

module.exports = delitos;