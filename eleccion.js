// Array que contiene el Menú
const Menu = [];

// Clase constructora de objetos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Objetos y método .Push
const Plato1 = new Producto(`Milanesa con puré`, 500);
Menu.push(Plato1);
const Plato2 = new Producto(`Bife con ensalada`, 600);
Menu.push(Plato2);
const Plato3 = new Producto(`Fideos con salsa`, 400);
Menu.push(Plato3);
const Bebida1 = new Producto(`Agua`, 100);
Menu.push(Bebida1);
const Bebida2 = new Producto(`Jugo`, 150);
Menu.push(Bebida2);
const Bebida3 = new Producto(`Vino`, 200);
Menu.push(Bebida3);

// buscar los elementos del DOM
const selectElem = document.getElementById('lista')
const botonAgregar = document.getElementById('agregar')
const botonFinalizar = document.getElementById('finalizar')

Menu.forEach(prod=>{
   const optionProd =  document.createElement('option')
   optionProd.innerText = `${prod.nombre}: $${prod.precio}`
   optionProd.setAttribute('value',`${prod.nombre}`)
   selectElem.append(optionProd)
})

// carrito
const carrito = []
botonAgregar.onclick = () =>{
    const nomProd = selectElem.value
    const prodSelec = Menu.find(prod=>prod.nombre === nomProd)
    carrito.push(prodSelec)
    swal(`¡Producto agregado!`);
}

botonFinalizar.onclick = () =>{
    let totalCompra = 0
    carrito.forEach(prod=>{
        totalCompra = totalCompra + parseInt(prod.precio)
    })
    swal(`¡Buen trabajo!`, `El total a pagar es $${totalCompra}`);
}