// Variable que guarda el resultado
// let resultado = 0
// Array que contiene el Menú
// const Menu = []
// Clase constructora de objetos
// class Plato {
//     constructor (nombre, precio) {
//         this.nombre = nombre
//         this.precio = precio
//     }
// }
// class Bebida {
//     constructor (nombre, precio) {
//         this.nombre = nombre
//         this.precio = precio
//     }
// }
// Objetos y método .Push
// const Plato1 = (new Plato (`Milanesa con puré`, 5))
// Menu.push (Plato1)
// const Plato2 = (new Plato (`Bife con ensalada`, 6))
// Menu.push (Plato2)
// const Plato3 = (new Plato (`Fideos con salsa`, 4))
// Menu.push (Plato3)
// const Bebida1 = (new Bebida (`Agua`, 3))
// Menu.push (Bebida1)
// Funciones
// function suma (a,b) {
//     resultado = a+b    
// }
// function despedida () {
//     alert(`Muchas gracias ` + nombreCliente + `, aguarda un momento y ya sale tu pedido`)
// }
// function opcionIncorrecta () {
//     alert(`Por favor, ingrese una opción correcta`)
// }
// Comienzo
// let nombreCliente = document.querySelector('.input-nombre')
// let botonAceptar = document.querySelector('button-aceptar')
// let nombreCliente = prompt(`¡Hola!, como te llamas?`)

//     while (nombreCliente != Number) {
//         let pedido = prompt(nombreCliente + `, que quieres pedir hoy? 
        
//         (ingrese 1, 2 o 3 segun corresponda)

//         1) Milanesa con puré + bebida
//         2) Bife con ensalada + bebida
//         3) Fideos con salsa + bebida`)

//         if (pedido == 1) {
//             suma(Plato1.precio, Bebida1.precio)
//             alert(`El total de la factura es $` + resultado)
//             alert(`Tu pedido se realizó con éxito`)
//             despedida()
//             console.log(pedido)
//             break
//         }

//         if (pedido == 2) {
//             suma(Plato2.precio, Bebida1.precio)
//             alert(`El total de la factura es $` + resultado)
//             alert(`Tu pedido se realizó con éxito`)
//             despedida()
//             console.log(pedido)
//             break
//         }

//         if (pedido == 3) {
//             suma(Plato3.precio, Bebida1.precio)
//             alert(`El total de la factura es $` + resultado)
//             alert(`Tu pedido se realizó con éxito`)
//             despedida()
//             console.log(pedido)
//            break
//         } else {
//             opcionIncorrecta()
//         }
//     }