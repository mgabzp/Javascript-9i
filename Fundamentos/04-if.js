//Estructura de control

//If... Else

/* Si se cumple la condición
entonces realizar la acción

Si no se cumple la condición
entonces hacer otra cosa

*/

let num= 5;


// //NaN Not a number
// if (isNaN (num)){
//     console.log ('Ingrese un número');
// }else {
//     if (num % 2 === 0 ) {
//         console.log ('El número es par');
//     } else {
//         console.warn ('El número no es par');
//     }
    
//     if (num===10){
//     console.log ('El número es igual a 10');
//     } else if (num > 10){
//         console.log ('El número es mayor que 10'); //else if sería como "sino si"
//     }else{
//         console.log ('El número es menor que 10');
//     }

// }




if (num % 2 === 0 ) {
    console.log ('El número es par');
} else {
    console.warn ('El número no es par');
}

if (num===10){
console.log ('El número es igual a 10');
} else if (num > 10){
    console.log ('El número es mayor que 10'); //else if sería como "sino si"
}else{
    console.log ('El número es menor que 10');
}

//fiesta
//Solo puede entrar un mayor de edad, edad <=18
//Si no es mayor de edad debe ir acompañado de un tutor.

let edad =17
let tutor =false

if (edad >= 18){
    console.log('Bienvenido a la JODA!!')
}else if (tutor===true){
    console.log ('Bienvenidos a la JODA!! No se separe de su tutor');
}else{
    console.log ('Salga de aquí');
}


if (edad<18 && tutor ===false){                            // && SE USA PARA "AND"
    console.error ('Salga de aquí');
}else if (edad>=18 || tutor === true){                     // || SE USA PARA "OR"
    console.log ('Bienvenido a la JODA!!');
}