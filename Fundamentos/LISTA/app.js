let alumnos = [
    "Pablo Marino",
    "Fabrizio Tonin",
    "Laura Bono",
    "Carlos Sosa",
    "José Gonzalez",
    "Alberto Pérez",
];

let tarjeta = document.querySelector('.card-body') //query puede traer por elemento, por la clase, por su id. Se llama entre comillas y con un punto adelante.

let tarjetaOrdena = document.querySelector("#card-ordenar");

function listarAlumnos (array, contenedor){
    array.forEach(function(alumno){
        let parrafo= document.createElement('p') //este metodo crea etiquetas/elementos html. Se lo pone entre comillas.

        parrafo.innerText=alumno //innerText no es un método, es un valor, va con =

        return contenedor.appendChild(parrafo); //appendChild agrega un hijo al contenedor

    });

}

listarAlumnos (alumnos, tarjeta);