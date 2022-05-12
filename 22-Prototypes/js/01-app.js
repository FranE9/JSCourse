//Los prototypes estan relacionados con los objetos
//Todos los objetos tienen prototypes

//Object literal
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente)
console.log(typeof cliente)


//Constructor del objeto
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo=saldo;
}

const juan = new Cliente('Juan', 700);
console.log(juan);

const roberto = new Cliente('Roberto', 750);
console.log(roberto);