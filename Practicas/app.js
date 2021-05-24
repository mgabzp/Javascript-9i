// Más info WHILE

let num = 0;

do {

num ++;
accion

}

while (num > 10)

/*El do while se ejecuta al menos una vez luego se ejecuta hasta que la condicionn es falsa. Si o si ejecuta aunque sea una vez.

Para saltar un valor de un for, se puede usar "CONTINUE" dentro de un for x ej. Lo que hace es
saltar en x punto de la iteracion. y dps sigue.*/

//CONTINUE

if (i==3){
continue;
}

//////////////////////////////////////////////////////////////////////////////////

// FOR IN
// Muestra el indice (posicion) de los elementos. Por eso si queremos que nos muestre el valor, se pone x ej:

let animales = ['gato', 'perro', 'tiranosaurio']

for (animal in animales){
document.write (animal[animales]); // o posiciÓn.
}

//FOR OF
// Muestra el valor de los elementos.

for (animal of animales){
    document.write (animal);
}

//LABELS
