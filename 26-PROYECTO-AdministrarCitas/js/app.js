//Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formulario=document.querySelector('#nueva-cita');
const contenedorCitas=document.querySelector('#citas');

//Registrar eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
}

//Objeto con la informacion de la cita
const citasObj={
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    horas: '',
    sintomas: ''
}

//Agregar datos al objeto de  cita
function datosCita(e){
    citasObj[e.target.name]=e.target.value;
}