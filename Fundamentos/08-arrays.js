//Array o arreglos
//Lista, operaciones de recorrido, de mutación de un arreglo (no es buena práctica)

let alumnos = ['Pablo', 'Fabrizio', 'Laura', 'Gabriela']

//cómo acceder a un elemento dentro del arreglo

alumnos = [2] //se pone la posición segun el lenght (comienza dsd 0 como los string)

//obtener el ultimo elemento

alumnos = [alumnos.length - 1]

//concatenar todos los elementos en 1 string

alumnos.join () //por defecto si no se pone nada dentro de paréntesis separa los elementos con una coma, sino se ingresa un string y se elige con qué caracter separalos, x ej "-"

//Iterar --> hacer que se muestren de a uno los elementos

for (let i=0; i < alumnos.length; i++ ){
    console.log (`Hola soy ${alumnos [i]}`)
}

//agregar elementos

alumnos.push ('Jorge')

//eliminar el último elemento

alumnos.pop ()

//añadir un elemento al principio

alumnos.unshift('Walter')

//Eliminar el primer elemento

alumnos.shift()

//Encontrar el índice de un elemento

console.log (alumnos.indexOf('Fabrizio')); //si el elemento no existe sale posición -1

//encontrar un elemento

console.log (alumnos.includes('Gabriela')); //si el elemento existe devuelve un verdadero, sino un false

//eliminar un elemento mediante su posición

let pos=1

alumnos.splice(pos, 1) //primero se pone la variable pos que nos situa en posición 1, luego separado por coma se pone cuantos elementos se quiere eliminar.

//Reemplazar valores por unos nuevos

alumnos.splice (0,2,'Daniel', 'Juan' );

//Concatenar 2 arrays-- IMPORTANTE! siempre se crea una nueva variable que será la que contiene la concatenación

let comision= alumnas.concat (alumnos)

// Para ordenar de forma alfabética los string de los arrays

alumnos.sort ()

//Para ordenarlos de manera reversa

alumnos.reverse ()

//Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
let alumnosEspeciales = alumnos.slice(1, 3); //posicion inicial y posicion final

let respuesta=["🥚", "🐔"].sort()




