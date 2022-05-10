//Operador mayor que y menor que

const dinero = 500;
const totalAPagar =900;
const tarjeta = true;

if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if(tarjeta){
    console.log("Si puedo pagar porque tengo la tarjeta")
}else {
    console.log('Fondos Insuficientes');
}