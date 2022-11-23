// Variable que guarda el resultado
let resultado = 0
// Array que contiene el Menú
const Menu = []
// Clase constructora de objetos
class Plato {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
class Bebida {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
}
// Objetos y método .Push
const Plato1 = (new Plato (`Milanesa con puré`, 5))
Menu.push (Plato1)
const Plato2 = (new Plato (`Bife con ensalada`, 6))
Menu.push (Plato2)
const Plato3 = (new Plato (`Fideos con salsa`, 4))
Menu.push (Plato3)
const Bebida1 = (new Bebida (`Agua`, 3))
Menu.push (Bebida1)
// Función
function suma (a,b) {
    resultado = a+b    
}
function redireccionarEleccion() {
    location.href = "eleccion.html"
}
// Manipulación DOM
const section = document.querySelector('#section-id')
section.classList.add('section')

const formularioNombre = document.querySelector('#formulario-id')
formularioNombre.classList.add('formulario')

const tituloFormulario = document.querySelector('#titulo-id')
tituloFormulario.classList.add('titulo')
tituloFormulario.innerText = '¡Hola!, como te llamas?'

const inputNombre = document.querySelector('.input1')

const inputAceptar = document.querySelector('.input2')
// Variable que guarda el nombre del cliente
let nombreCliente = ''
// Evento que escucha a inputNombre y devuelva un alert personalizado
formularioNombre.addEventListener("submit", (e) => {
    e.preventDefault()
    nombreCliente = inputNombre.value
    swal("¡Buen trabajo!", `Bienvenido ${nombreCliente}`, "success")
    console.log(nombreCliente)
    formularioNombre.reset()
})
// Boton para poder redireccionar al html de pedidos
const botonEleccion = document.createElement('button')
botonEleccion.setAttribute('type','submit')
botonEleccion.classList.add('boton1')
botonEleccion.innerText = 'Quiero pedir'
section.append(botonEleccion)
botonEleccion.addEventListener("click", (e) => {
    redireccionarEleccion()
})