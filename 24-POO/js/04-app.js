//Class declaration
class Cliente {

    #nombre

    constructor(nombre, saldo){
        this.#nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const juan = new Cliente('Juan',400);
console.log(juan)

console.log(juan.mostrarInformacion());



class Empresa{

    #nombre2;

    setNombre(nombre2){
        this.#nombre2=nombre2;
    }

    getNombre(){
        return this.#nombre2
    }
}

const Nestle = new Empresa();
Nestle.setNombre('Nestle');
console.log(Nestle.getNombre() );

