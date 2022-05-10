/*for(let i=0; i<=20; i++ ){
    if(i ===5 ){
        console.log(`Este es el 5`);
        continue;
    }
    console.log(`Numero ${i}`)
}*/

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'TV', precio: 100 },
    { nombre: 'PC', precio: 200 },
    { nombre: 'Smart', precio: 300, descuento: true },
    { nombre: 'Teclado', precio: 5050 },
    { nombre: 'Headphones', precio: 1500 },
]

for(let i = 0; i< carrito.length; i++ ){
    if (carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}