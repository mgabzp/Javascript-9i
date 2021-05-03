let nombre= "Eugenio"
let apellido= "Gonzalez"
let frase= "                 Bienvenido a la clase               "

//concatenar texto
console.log (nombre, apellido)
console.log (nombre + " " + apellido)


//Template string sirve para mezclar texto con variables
console.log (`Mi nombre es ${nombre} ${apellido}`);

//metodos de los string

console.log (nombre.toUpperCase());
console.log (nombre.toLowerCase());
console.log (apellido.length);
console.log (apellido.charAt (4));
console.log (apellido.substr (0,3)); //parametros: (posicion, cantidad de caracteres a mostrar)

console.log (frase.trim ());  //trim sirve para quitar los espacios adelante y atras de la palabra.
