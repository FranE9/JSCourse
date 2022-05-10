inciarApp();

function inciarApp(){
    console.log('Iniciado app...');

    segundaFunction();
}

function segundaFunction(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticando exitosamente: ${usuario}`);
}