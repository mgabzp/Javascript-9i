// Tarea 2

valor1= parseInt (prompt ('Ingrese el primer valor'));
valor2= parseInt (prompt ('Ingrese el segundo valor'));
let operacion = prompt ('Ingrese una operación (+, -, *, /)');

if (isNaN (valor1)){
    console.warn ('El valor ingresado no es un número, se cambiará el valor a 0')
    valor1= 0
    console.log (`Primer número = ${valor1}`);
}

if (isNaN (valor2)){
    console.warn ('El valor ingresado no es un número, se cambiará el valor a 0')
    valor2= 0
    console.log (`Segundo número = ${valor2}`);
}



switch (operacion) {
    case "+":
        console.log (`La suma de ${valor1} más ${valor2} es igual a ${valor1+valor2}`);
        break;
    case "-":
            console.log (`La resta de ${valor1} menos ${valor2} es igual a ${valor1-valor2}`);
            break;
    case "*":
        console.log (`El producto entre ${valor1} y ${valor2} es igual a ${valor1*valor2}`);
        break;
    case "/":
        console.log (`El cociente entre ${valor1} y ${valor2} es igual a ${valor1/valor2}`);
        break;
    default:
        console.error ('Operación no válida');
        break;
}