//Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const juan = new Cliente('Juan',400);
    console.log(juan.mostrarInformacion());
    console.log(juan);



//Class expression
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
}

console.log(Cliente.bienvenida)
const Juan2 = new Cliente2('Juan', 500);
console.log(Juan2);




//Prueba
class perro{
    constructor(nombre, raza, edad){
        this.nombre=nombre;
        this.raza=raza;
        this.edad=edad;
    }
    mostrarInformacionPerro(){
        return `El nombre del perro es: ${this.nombre}, su raza es: ${this.raza} y su edad es: ${this.edad}`;

    }

}

const pingui = new perro('Pingui', 'French Mixto', 3);
console.log(pingui.mostrarInformacionPerro());