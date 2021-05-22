//tarea objeto persona
let persona={
    nombre: ' Crimi Marco',
    edad: 24,
    dni: 40582645,
    domicilio: 'Av. Avellaneda 500',
    hijos: 0,
    profesión: 'Administrador de Empresas',
    saludar: function (){
        document.write (`Hola, mi nombre es ${this.nombre}.`);
    },
    listar: function (){
        for (let valores in persona){
            console.log (`${valores}: ${persona[valores]}`);
        }
    }
};

/* En funcion listar también puede ser
let valores= Object.values (persona);
        // for (let i=0; i < valores.length; i++){
        //     console.log (valores[i]);
}*/

//tarea objeto arreglo

let peliculas =[
    {titulo:'Harry Potter y la piedra filosofal', género: 'Ficción/Fantasía', anio: 2001, sinopsis: 'Cuando Harry Potter cumple 11 años se entera que es huérfano, hijo de dos magos y que posee poderes mágicos. En la Escuela de Magia y Brujería de Hogwarts aprende a jugar el deporte de alturas, Quidditch y juega un emocionante juego de ajedrez, en vías a encarar al Mago Oscuro que está empeñado en destruirlo.'},
    {titulo:'Harry Potter y la cámara secreta', género: 'Ficción/Fantasía', anio: 2002, sinopsis: 'Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador.'},
    {titulo:'Harry Potter y el prisionero de Azkaban', género: 'Ficción/Fantasía', anio: 2004, sinopsis: 'En su tercer año en Hogwarts, Harry, Ron y Hermione conocen a Sirius Black, el prisionero que ha escapado de Azkaban y aprenden a acercarse a un Hippogriffo mitad caballo/ mitad águila, a como transformar a los cambiantes Boggarts y el arte de la Adivinación. Harry deberá enfrentárse a los Dementores que son ladrones de almas, defenderse del peligroso hombre lobo y lidiar con la verdad acerca de la relación entre Sirius Black y sus padres.'},
    {titulo:'Harry Potter y el cáliz de fuego', género: 'Ficción/Fantasía', anio: 2005, sinopsis: 'Cuando el nombre de Harry Potter emerge del Cáliz de Fuego, se convierte en un competidor en una batalla agotadora por la gloria entre tres colegios de magos – El Torneo de los Tres Magos. Pero ya que Harry nunca presentó su nombre para El Torneo, ¿quién lo hizo? Ahora Harry debe enfrentar a un dragón infalible, demonios acuáticos feroces y un laberinto encantado, solamente para encontrarse con el cruel descubrimiento de El Quien No Debe Ser Nombrado.'},
]

function infoPeliculas (){
    document.write ('<h3><b> CARTELERA </b></h3>');
    for (let i = 0; i < peliculas.length; i++) {
        document.write (`<br> <b>Título: </b> ${peliculas[i].titulo} <br> <b> Género: </b> ${peliculas[i].género} <br> <b> Año: </b> ${peliculas[i].anio} <br> <b> Sinopsis: </b> ${peliculas[i].sinopsis} <br>`);
    }
}

