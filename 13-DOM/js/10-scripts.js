const enlace = document.createElement('A');

enlace.textContent= 'Nuevo Enlace';

enlace.href= '/nuevo-enlace';

console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children)
navegacion.insertBefore(enlace);


const info = document.createElement('div');
info.classList.add('info');
info.appendChild('parrafo1')
info.appendChild('parrafo2')
info.appendChild('parrafo3')

//Crear la imagen
const imagen = document.createElement('img');
imagen.src='img/hacer2.jpg';

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);