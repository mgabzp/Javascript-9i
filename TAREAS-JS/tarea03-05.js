//Tarea 1- Capitalizar un nombre

let nombre= prompt ('Ingrese su nombre a capitalizar');

console.log (nombre.length);
console.log (nombre.charAt (0));
console.log (nombre.substr(1,7));

console.log (nombre.charAt(0).toUpperCase() + nombre.substr(1,nombre.length-1));



//Tarea 2

let numero1= 10;
let numero2= 5;
let numero3= 30;


console.log (`El número máximo es: ${Math.max (numero1, numero2, numero3)}`);

console.log (`El número mínimo es: ${Math.min (numero1, numero2, numero3)}`);

console.log (Math.sqrt (numero2));

