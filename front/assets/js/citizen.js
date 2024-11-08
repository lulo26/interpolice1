console.log("hello world");

let contenido = document.querySelector("#contenido");
let frmCitizen = document.querySelector("#frmCitizen");
let btnNuevo = document.querySelector("#btnNuevo");

// ... ... ... ... ... ... ... ... ... ... ... ... ... //
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let apodo = document.querySelector("#apodo");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let fecha = document.querySelector("#fecha");
let especie = document.querySelector("#especie");
let rol = document.querySelector("#rol");
let foto = document.querySelector("#foto");
// ... ... ... ... ... ... ... ... ... ... ... ... ... //

let frmAction = "";

// carga la modal
const frmCrearCitizen = new bootstrap.Modal(
  document.getElementById("frmCrearCitizen")
);

// disparar la modal
btnNuevo.addEventListener("click", () => {
  // limpiar los input
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  apodo.value = "";
  fecha.value = "";
  especie.value = "";
  rol.value = "";
  foto.value = "";
  frmAction = "crear";
  frmCrearCitizen.show();
});

let api = "http://localhost:4200/api/citizen/";

document.addEventListener("DOMContentLoaded", () => {
  listartodos();
});

function listartodos() {
  fetch(api + "listartodos")
    .then((res) => res.json())
    .then((res) => {
      res.citizen.forEach((citizen) => {
        let fila = `<tr>
        <td>${citizen.id}</td>
        <td>${citizen.nombre}</td>
        <td>${citizen.apellido}</td>
        <td>${citizen.email}</td>
        <td>${citizen.apodo}</td>
        <td>${citizen.fecha}</td>
        <td>${citizen.especie}</td>
        <td>${citizen.rol}</td>
        <td><button class="btnBorrar btn btn-danger"><i class="bi bi-trash"></i></button></td>
        <td><button class="btnEditar btn btn-secondary"><i class="bi bi-pencil-square"></i></button></td>
        </tr><br>`;
        contenido.innerHTML += fila;
      });
    });
}

frmCitizen.addEventListener("submit", (e) => {
  e.preventDefault();
  // crear ciudadano
  if (frmAction === "crear") {
    fetch(api + "crear", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        apodo: apodo.value,
        fecha: fecha.value,
        especie: especie.value,
        rol: rol.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        frmCrearCitizen.hide();
        location.reload();
      });
  }

  // editar ciudadano
  if (frmAction === "editar") {
    fetch(api + "crear", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        apodo: apodo.value,
        fecha: fecha.value,
        especie: especie.value,
        rol: rol.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.status, res.respuesta);
        alert("exito");
        frmCrearCitizen.hide();
        location.reload();
      });
  }
});

/* function listarTodos() {
  fetch(api + "listarTodos")
    .then((res) => res.json())
    .then((res) => {
      alert(res.status);
      alert(res.mensaje);
      res.citizen.map((citizen) => {
        
      });
    });
} */
