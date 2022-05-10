// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionamos "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito=[];//reseteamos arreglo

        limpiarHTML(); //Elimiunamos todo el HTML
    });
}

//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
    const cursoId = e.target.getAttribute('data-id');

    //Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito=articulosCarrito.filter( curso => curso.id !=cursoId);

    carritoHTML();//iTERAR SOBRE EL CARRITO Y MOSTRA RSU HTML
    }
}


//Lee el contenido del HTML al qe le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //console.log(curso);

    //Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id ===infoCurso.id );
    if(existe) {
        //Actualizamos la cantiodad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id ===infoCurso.id){
            curso.cantidad++;
            return curso; // retorna objeto actualizado
            }else{
                return curso; // retorna los objetos no duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else {
        //Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }



//Agrega elementos al arreglo de carrito


console.log(articulosCarrito);

carritoHTML();
}

function carritoHTML(){

    //Limpiar el HTML
limpiarHTML();

    //Recorre el carrito y genera el HTML



    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src="${imagen}" width='100'>
        </td>
        <td>
        ${titulo}
        </td>
        <td>
        ${precio}
        </td>
        <td>
        ${cantidad}
        </td>
        <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

        //Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Eliminar los cursos del tbody
function limpiarHTML(){

    //Forma lenta
    //contenedorCarrito.innerHTML='';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}