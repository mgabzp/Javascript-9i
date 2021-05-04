//Estructura condicional

let numberA= 50

switch (numberA) {
    case 10:
        //accion
        console.log ('El numero es 10')
        break;
    case 25:
            //accion
            console.log ('El numero es 25')
            break;
    case 3:
        //accion
        console.log ('El numero es 3')
        break;

    default:
        console.log ('El número es de otro valor')
        break;
}

//.................................
let diaNumero = new  Date ().getDay ()

switch (diaNumero){
    case 0:
        console.log ('Hoy es Domingo');
        break;
    case 1:
        console.log ('Hoy es Lunes');
    break;
    case 2:
        console.log ('Hoy es Martes');
    break;
    case 3:
        console.log ('Hoy es Miércoles');
    break;
    case 4:
        console.log ('Hoy es Jueves');
    break;
    case 5:
        console.log ('Hoy es Viernes');
    break;

    default:
        console.log ('Hoy es sábado');
    break;

}

//......................................................

let comando=prompt ('Ingrese un comando (alerta, consola, print)');

switch (comando){
    case 'alerta':
        alert ('Usando switch en un alert')
        break;
    case 'consola':
        console.log ('Usando switch en la consola');
        break;
    case 'print':
        document.write ('Usando switch en el navegador');
        break;
    default:
        console.error('No existe ese comando, no sea mala persona')
        break;

}