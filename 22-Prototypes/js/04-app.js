//Heredar un prototype
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo=saldo;
}

Cliente.prototype.tipoCliente=function(){
    let tipo;

    if(this.saldo>10000){
        tipo='Gold';
    }else if(this.saldo>5000){
        tipo='Platinum';
    }else{
        tipo = 'normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo=function(retira){
    this.saldo-=retira
}




//heredando el constructor de cliente
function Persona(nombre, saldo, telefono){
Cliente.call(this, nombre, saldo);
this.telefono=telefono;
}


Persona.prototype=Object.create(Cliente.prototype );
Persona.prototype.constructor=Cliente;


//Instanciarlo
const juan = new Persona('Juan', 5000,1092012)
console.log(juan);
console.log(juan.nombreClienteSaldo())


Persona.prototype.mostrarTelefono=function(){
    return `El telefono de sta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())