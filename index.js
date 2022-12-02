// Función
function redireccionarEleccion() {
  location.href = "eleccion.html";
}
// Manipulación DOM
const body = document.querySelector("#body");

const section = document.querySelector("#section-id");
section.classList.add("section");

const formularioNombre = document.querySelector("#formulario-id");
formularioNombre.classList.add("formulario");

const tituloFormulario = document.querySelector("#titulo-id");
tituloFormulario.classList.add("titulo");
tituloFormulario.innerText = "¡Hola!, como te llamas?";

const inputNombre = document.querySelector(".input1");

const inputEdad = document.querySelector("#input-edad");

const inputAceptar = document.querySelector(".input2");
// Variable que guarda datos del cliente
let cliente;
let clienteJSON;
let clienteLocalStorage;
let clientePARSE;
// Evento que escucha al formulario, guarda los datos en localStorage y devuelva un alert personalizado
formularioNombre.addEventListener("submit", (e) => {
  e.preventDefault();
  // Input Nombre
  cliente = {
    nombre: inputNombre.value,
    edad: inputEdad.value,
  };
  clienteJSON = JSON.stringify(cliente);
  localStorage.setItem("usuario", clienteJSON);
  clienteLocalStorage = localStorage.getItem("usuario");
  clientePARSE = JSON.parse(clienteLocalStorage);
  swal("¡Buen trabajo!", `Bienvenido ${clientePARSE.nombre}`, "success");
  formularioNombre.reset();
});
// Boton que permite mostrar el menú
const botonEleccion = document.createElement("button");
botonEleccion.setAttribute("type", "submit");
botonEleccion.classList.add("boton1");
botonEleccion.innerText = "Quiero pedir";
section.append(botonEleccion);
botonEleccion.addEventListener("click", (e) => {
  redireccionarEleccion();
});