/*Ciudades
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'*/

let ciudades = [];


function listaCiudades (){
    let ingresarCiudad= prompt ('Ingrese una ciudad, sino apriete "Cancelar"');

    while (ingresarCiudad !== null && ingresarCiudad !== '0'){
        ciudades.push (ingresarCiudad.trim().toUpperCase());
        
        ingresarCiudad= prompt ('Ingrese otra ciudad, sino apriete "Cancelar"');
    }
    console.log (`Las ciudades ingresadas son ${ciudades}`);

    console.log (`La cantidad de ciudades agregadas son ${ciudades.length}`);

    console.log (ciudades.splice (1,1, 'BARCELONA'));

    document.write (`La primera ciudad es ${ciudades[0]}, la tercera ciudad es ${ciudades[2]} y la última ciudad es ${ciudades[ciudades.length-1]}.`);

    document.write (`El elemento que ocupa la segunda posición es ${ciudades[1]}`);
}









