//Tarea 1- Capitalizar un nombre

let nombre= prompt ('Ingrese su nombre a capitalizar');

console.log (nombre.length);
console.log (nombre.charAt (0));
console.log (nombre.substr(1,7));

console.log (nombre.charAt(0).toUpperCase() + nombre.substr(1,nombre.length-1));



//Tarea 2

let numeroA= 10;
let numeroB= 5;
let numeroC= 30;


console.log (`El número máximo es: ${Math.max (numeroA, numeroB, numeroC)}`);

console.log (`El número mínimo es: ${Math.min (numeroA, numeroB, numeroC)}`);

console.log (Math.sqrt (numeroB));

