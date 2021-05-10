//Desafío 2


let numberx= prompt("Ingrese un número")
let total= 0


while(numberx != null){
    numberx= parseInt(numberx)

    if (isNaN(numberx) == false){
        total = total + numberx
    }else{
        alert("Por favor ingresar un número")
    }

     numberx= prompt("Ingrese un número")
}

console.log(`La suma de los números ingresados es igual a ${total}`)