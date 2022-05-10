const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Monitor 22 pulgadas', precio: 700},
    { nombre: 'Monitor 21 pulgadas', precio: 600},
    { nombre: 'Monitor 27 pulgadas', precio: 600},
    { nombre: 'Monitor 32 pulgadas', precio: 700},
    { nombre: 'Monitor 30 pulgadas', precio: 800},
    { nombre: 'Monitor 27 pulgadas', precio: 200},
]


carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

carrito.map( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )