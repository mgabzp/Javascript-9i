//callbacks-- son FUNCIONES ANÓNIMAS

//son funciones que se envian como parámetros y se ejecutan dps de un método

let numeros= [2,15,35,6];

let numerosOrdenados = numeros.sort(function (a,b){
    return a - b
});

//Filter

let pares = numeros.filter(function (num) {
    return num %2 === 0;
});

//find --- Sirve para buscar un valor si lo encuentra, sino undefined. Recorre todo el array. Sirve para saber si algo existe, un sólo valor.

let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];

alumnos.find (function (alumno){
    return alumno === "Lucas";
});

//Map --- sirve para iterar, crea un NUEVO arreglo, con el resultado de la funcion
// No es una buena práctica mutar los arreglos. Para eso está el filter/map...

let numerosDobles = numeros.map (function(num){
    return num*2
});


carrito.map (function(producto, index){//x ej sirve para un array con elementos. el segundo item es opcional.
    console.log (`${index+1} - ${producto}`);
});
