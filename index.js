// Variable que guarda el resultado
// let resultado = 0;
// Array que contiene el Menú
// const Menu = [];
// Clase constructora de objetos
// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }
// Objetos y método .Push
// const Plato1 = new Producto(`Milanesa con puré`, 5);
// Menu.push(Plato1);
// const Plato2 = new Producto(`Bife con ensalada`, 6);
// Menu.push(Plato2);
// const Plato3 = new Producto(`Fideos con salsa`, 4);
// Menu.push(Plato3);
// const Bebida1 = new Producto(`Agua`, 3);
// Menu.push(Bebida1);
// const Bebida2 = new Producto(`Jugo`, 4);
// Menu.push(Bebida2);
// const Bebida3 = new Producto(`Vino`, 3);
// Menu.push(Bebida3);

// Array que contiene los objetos
const menu = [
  // Platos
  {
      id: "plato-1",
      titulo: "Milanesa con pure",
      imagen: "./img/milanesa-con-pure.jpg",
      precio: 1000
  },
  {
      id: "plato-2",
      titulo: "Bife con ensalada",
      imagen: "./img/bife-con-ensalada.jpg",
      precio: 900
  },
  {
      id: "plato-3",
      titulo: "Fideos con salsa",
      imagen: "fideos-con-salsa.jpg",
      precio: 800
  },
  // Bebidas
  {
      id: "bebida-1",
      titulo: "Agua",
      imagen: "./img/agua.jpg",
      precio: 200
  },
  {
      id: "bebida-2",
      titulo: "Jugo",
      imagen: "./img/jugo.jpg",
      precio: 250
  },
  {
      id: "bebida-3",
      titulo: "Vino",
      imagen: "./img/vino.jpg",
      precio: 300
  },
];


const contenedorProductos = document.createElement("div");
contenedorProductos.setAttribute("id","contenedor-productos")

// const botonesCategorias = document.querySelectorAll(".boton-categoria");
// const tituloPrincipal = document.querySelector("#titulo-principal");
// let botonesAgregar = document.querySelectorAll(".producto-agregar");
// const numerito = document.querySelector("#numerito");


function cargarProductos(productosDelMenu) {

  //contenedorProductos.innerHTML = "";

  productosDelMenu.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="${menu.imagen}" class="card-img-top" alt="${menu.titulo}">
          <div class="card-body">
            <h5 class="card-title">${menu.titulo}</h5>
            <p class="card-text">${menu.precio}</p>
            <button class="btn btn-primary">Pedir</button>
          </div>
          </div>
      `;

      contenedorProductos.append(div);
  })

  //actualizarBotonesAgregar();
}

//cargarProductos(menu);




// Función
function limpiarBody() {
  body.textContent = "";
}

function suma(a, b) {
  resultado = a + b;
}
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
// Boton para poder redireccionar al html de pedidos (por falta de tiempo por mi trabajo todavia no lo pude desarrollar)
const botonEleccion = document.createElement("button");
botonEleccion.setAttribute("type", "submit");
botonEleccion.classList.add("boton1");
botonEleccion.innerText = "Quiero pedir";
section.append(botonEleccion);
botonEleccion.addEventListener("click", (e) => {
  limpiarBody();
  cargarProductos(menu);
});


// buscar los elementos del DOM

// const selectElem = document.getElementById('lista')
// const botonAgregar = document.getElementById('agregar')
// const botonFinzalizar = document.getElementById('finalizar')

// Menu.forEach(prod=>{
//    const optionProd =  document.createElement('option')
//    optionProd.innerText = `${prod.nombre}: ${prod.precio}`
//    optionProd.setAttribute('value',`${prod.nombre}`)
//    selectElem.append(optionProd)
// })

// // carrito
// const carrito = []
// //console.log(productosArray)
// botonAgregar.onclick = () =>{
//     const nomProd = selectElem.value
//     const prodSelec = productosArray.find(prod=>prod.nombre === nomProd)
//     carrito.push(prodSelec)
//     console.log(carrito)
// }

// botonFinzalizar.onclick = () =>{
//     let totalCompra = 0
//     carrito.forEach(prod=>{
//         totalCompra = totalCompra + parseInt(prod.precio)
//     })
//     alert(`El total a pagar es ${totalCompra}`)
// }

// stockProductos.forEach((prod) => {
//   const { id, nombre, precio, desc, img, cantidad } = prod;
//   if (contenedor) {
//     contenedor.innerHTML += `
//     <div class="card mt-3" style="width: 18rem;">
//     <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">${nombre}</h5>
//       <p class="card-text">Precio: ${precio}</p>
//       <p class="card-text">Descripcion: ${desc}</p>
//       <p class="card-text">Cantidad: ${cantidad}</p>
//       <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
//     </div>
//   </div>
//     `;
//   }
// });
