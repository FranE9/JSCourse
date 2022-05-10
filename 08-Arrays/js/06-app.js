const carrito = [];


//Definir producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 ={
    nombre: "pixel2",
    precio: 850
}

const producto3 = {
    nombre: "pc2",
    precio:1050
}

let resultado;

resultado = [...carrito, producto]


console.table(resultado);