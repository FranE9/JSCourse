const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
let resultado = ' ';
carrito.forEach((producto, index) => {
if(producto.nombre==='Teclado'){
    resultado = carrito[index]
}
});

console.log(resultado)

//con .find

const resultado2 = carrito.find(producto=> producto.nombre==='Teclado');
console.log(resultado2);