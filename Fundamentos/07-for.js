// For

for (let i=0; i<10; i++){ //primer parametro: la i hace referencia a indice o iteración (inicializa el bucle), el segundo parametro es la condicion que se tiene que cumplir, se evalua c/vuelta, tercer parametro: se le suma un valor a i para que cdo valga 10 se termine el ciclo (si no ponemos el ultimo parametro, será infinito)
    console.log (i);

}


//Tarea-- Ingresar la tabla que queremos calcular
//mostrar por consola la tabla

let tabla= parseInt (prompt ('Ingrese el número de la tabla a calcular'));

// if (isNaN (tabla)){
//     console.error ("Debe enviar un número");
// } else {


while (tabla) { //IMPORTANTE!! el valor sólo analiza que sea true, que no sea indefinido, que no sea nulo.
    for (let i=1; i<=10; i++){
    console.log (`${tabla} x ${i} = ${tabla*i}`);
    }

    tabla= parseInt (prompt ('Ingrese el número de la tabla a calcular'));

}
console.error ('Usuario canceló o ingresó dato inválido');

