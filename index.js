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
// Comienzo del programa
const section = document.querySelector('.section')
const formularioNombre = document.createElement

{/* <section class="section">
            <form class="formulario">
                <h3>¡Hola!, como te llamas?</h3>
                <input class="input-nombre" type="text" name="input-nombre" placeholder="Por favor, ingrese aquí su nombre">
                <input class="input-aceptar" type="submit" value="ACEPTAR">
            </form>
        </section> */}