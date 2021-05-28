//Funciones constructoras

//Plantilla p/crear varios objetos (con propiedades y metodos)

//auto (propiedades): color, marca, modelo, etc

//metodos: arrancar (), apagarse (), moverse ()

function Movies (titulo, sinopsis, director, reparto){
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.director = director;
    this.reparto = reparto
}

let jurassic = new Movies ('Jurassic Park',
'Dinosaurios que atacan',
'Steven Spielberg',
'Carlos, Hermenia, José'
);

//Si llamo la variable me va a ordenar todos los datos con la funcion Movies.

