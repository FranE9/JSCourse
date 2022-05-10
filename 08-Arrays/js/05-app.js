const meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo', 'Junio'];

//Agregar al final del arreglo
meses.push('Julio');

console.table(meses);

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

carrito.push(producto);
carrito.push(producto2);
console.table(carrito);