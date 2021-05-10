//Array o arreglos
//Lista, operaciones de recorrido, de mutación de un arreglo (no es buena práctica)

let alumnos = ['Pablo', 'Fabrizio', 'Laura', 'Gabriela']

//cómo acceder a un elemento dentro del arreglo

// alumnos = [2] //se pone la posición segun el lenght (comienza dsd 0 como los string)

// //obtener el ultimo elemento

// alumnos = [alumnos.length - 1]

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