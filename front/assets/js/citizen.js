let api = "http://localhost:1400/api/citizen/";

function listarTodos() {
  fetch(api + "listarTodos")
    .then((res) => res.json())
    .then((res) => {
      alert(res.status);
      alert(res.mensaje);
      res.aprendiz.map((aprendiz) => {
        /*...*/
      });
    });
}
