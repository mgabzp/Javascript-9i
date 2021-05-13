//funciones (son como tareas o listas de acciones, me van a devolver un resultado, si no llamamos a las funciones no se ejecutan)
//Tareas

//funciones declarativas
function miFuncion(){

    console.log('Hola Mundo')
    
    
    }
    
    // mifuncion()

    //Ejemplos funciones declarativas

    let num1=34
    let num2=56

    function sumar (x, y){//a la funcion solo le interesan los parametros que ingresemos, no importa el nombre que se le asigne entre parentesis.
        console.log (x+y);
    }




    function calculadora (num1=5, num2=10, operacion="+"){ //a las variables se les puede poner un valor x defecto x si no ingresan datos.
        if (!num1 || !num2){
            return "Falta el valor"; //el return corta el programa, 2do: devuelve un valor (se lo puede guardar en una variable y dps llamarla)
        }

        switch (operacion){   
            case "+":
                return num1+num2;
            case "-":
                return num1-num2;
            case "*":
                return num1*num2;
            case "/":
                return num1/num2;
            default:
                return "Operación inválida";

        }
    }

    console.log (calculadora ());


    function cubo (num){
        return Math.pow (num,3);
    }

    let numeros= [23,45,2,67];

    function converCubo (array){
        let numerosAlCubo =[];

        //For...of
        for (let n of array){
            numerosAlCubo.push (array(n));
        }
        return numerosAlCubo;
    }



    
    
    //funciones anónimas -- van como una variable constante, no tiene nombre, directamente es una función.
    const saludar = function (){
    
    console.log('Hola pibes')
    
    }


    //Scope--------------
    let heroe= "Superman" //variable global


    function saludarHeroe (){

        let heroe= "Batman"; //variable local---dentro de la funcion

        console.log (`Bienvenido ${heroe}`); //primero busca la variable dentro de la funcion, sino busca dentro del ambito global.
    }