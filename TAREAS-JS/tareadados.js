/*Dados
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

function randomDado1 (min, max){
    return (Math.floor (Math.random ()* (max - min)+ min));
}

function randomDado2 (min, max){
    return (Math.floor (Math.random ()* (max - min)+ min));
}


let resultado = [];

function dadosTirados (){
    for (let i=0; i<= 50; i++){
        let sumaDados = (randomDado1 (6,1) + randomDado2 (6,1));
        resultado.push (sumaDados);
        }
        console.log (`Los resultados de ambos dados tirados es igual a ${resultado}`);   
}

dadosTirados ();
