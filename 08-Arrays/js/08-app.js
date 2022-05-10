const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}





const {nombre} = producto;

console.log(nombre)

//Destrcutring con arreglos
const numeros = [ 10, 20, 30, 40 ,50];

const [primero, ... tercero] = numeros;

console.log(tercero);
console.log(primero)