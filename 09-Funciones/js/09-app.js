const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`cREANDO LA PLATLIST DE ${nombre}`)
    },
    borrar: function(id){
    console.log(`Borrando cancion... ${id}`)
    }

};


reproductor.reproducir(30)

reproductor.reproducir(524)

reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('HeavyMetal');

