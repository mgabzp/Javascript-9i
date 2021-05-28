//CLASES = contenedor

// Instancias

//Funcion constructora => plantilla

//Objetos => propiedades, métodos

//instancias => todos los objetos derivados de una clase o funcion constructora

//Las clases permiten crear métodos dentro de la misma clase

// X ej persona  = nombre, apellido, edad, dni, etc

//CREAR UNA CLASE

class Persona { //El nombre de la clase va en camelcase
constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

saludar (){
    console.log (`Hola, soy ${this.nombre} ${this.apellido}`);
}
}

let persona1= new Persona ('Fabrizio', 'Tonin');
let persona2= new Persona ('Carlos', 'Rodriguez');

//HERENCIA

//Para crear una clase que traiga propiedades y metodos de otra clase se usa EXTENDS. Palabra clave p/crear una clase secundria de otra clase (principal)


class Profesor extends Persona { //dps de extends se pone el nombre de la clase madre/padre
    constructor (nombre, apellido, materia){
        super(nombre, apellido); //super es para llamar a las propiedades de la clase principal
        this.materia = materia 

    }

    presentacion (){
        console.log (`Buen día, juntos aprenderemos ${this.materia}`);
    }

}


let profe1 = new Profesor ('Fabrizio', 'Tonin', 'React Native');

/*Tarea
  Cuenta bancaria
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
 Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


  class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(valor) {
      if (valor <= 0) {
        console.error("Ingresar un valor mayor que 0");
        return;
      }
      this.saldo += valor;
      //this.saldo=this.saldo + valor
      this.informar();
    }
  
    extraer(valor) {
      if (valor > this.saldo) {
        console.warn(`Solo puede extraer hasta $${this.saldo}`);
        return;
      }
      this.saldo -= valor;
      //this.saldo=this.saldo - valor
    }
  
    informar() {
      console.log("====Detalle de la cuenta====");
      console.log(`Titular: ${this.titular}`);
      console.log(`Saldo: ${this.saldo}`);
      console.log("============================");
    }
  }
  
  let cuenta1 = new Cuenta("Alex");
