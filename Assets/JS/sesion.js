//ELEMENTOS DOM
let inputEnviar = document.getElementById("submit");

//CLASES
class Usuario {
  constructor(nombre, email, pass) {
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
  }
}
const usuarios = [];

//INICIO DEL CODIGO
inputEnviar.onclick = (evento) => {

  let inputNombre = document.getElementById("nombre").value;
  let inputEmail = document.getElementById("email").value;
  let inputPass = document.getElementById("pass").value;
  usuarios.push(new Usuario(inputNombre, inputEmail, inputPass));

  evento.preventDefault();
  console.log("Formulario Entregado");
  console.log(usuarios);
};


