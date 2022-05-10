localStorage.setItem('nombre', 'Juan');

sessionStorage.setItem('nombre', ' Fran')

const producto = {
    nombre:"Monitor",
    precio: 300
}

const productoString =JSON.stringify(producto);
localStorage.setItem('producto', productoString)

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));