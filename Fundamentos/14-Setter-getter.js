/*Tarea
  Cuenta bancaria
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
 Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


//SETTER Y GETTET

  class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  //La palabra set hace que el método sea una propiedad computada, permite ingresar valores y que los muestre. cuenta1.ingresar = 2000
    set ingresar(valor) {
      if (valor <= 0) {
        console.error("Ingresar un valor mayor que 0");
        return;
      }
      this.saldo += valor;
      //this.saldo=this.saldo + valor
      this.informar;
    }
  
    extraer(valor) {
      if (valor > this.saldo) {
        console.warn(`Solo puede extraer hasta $${this.saldo}`);
        return;
      }
      this.saldo -= valor;
      //this.saldo=this.saldo - valor
    }
  
    get informar() { //sirve para mostrar todo poniendo x ej cuenta1.informar en consola
      console.log("====Detalle de la cuenta====");
      console.log(`Titular: ${this.titular}`);
      console.log(`Saldo: ${this.saldo}`);
      console.log("============================");
    }
  }
  
  let cuenta1 = new Cuenta("Alex");