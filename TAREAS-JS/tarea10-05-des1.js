// Desafío 1

let palabra = prompt ('Ingresar una palabra, para salir presione cancelar'));

let cadenas=[]

if (palabra == null){
    console.error ('El dato ingresado no es un texto');
} else {
while (palabra){
        cadenas.push (palabra)
        palabra = prompt ('Ingresar una palabra, para salir presione cancelar');
    }

}

console.log (`El texto ingresado es ${cadenas.join("-")}`);

