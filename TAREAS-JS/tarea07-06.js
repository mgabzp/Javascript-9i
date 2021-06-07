// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Las funciones serán:
// aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su  nombre y muestra su teléfono.
// eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
// Usar LocalStorage para guardar la info de la agenda y para consultar sus datos.



let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

let espacio = 10 - agenda.lenght;


class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

function agregarContacto (nombre, telefono) {
    if (agenda.lenght < 10){
        document.write ('Superó la cantidad de contactos posibles de ingresar.');
    } else {
        agenda.push (new Contacto (nombre, telefono));
        
        localStorage.setItem("agenda", JSON.stringify(agenda));
    }
}

function existeContacto (nombre){
    let contactoExistente = agenda.find (function(contacto){
        return contacto.nombre.toUpperCase () === nombre.toUpperCase();

    });
    if (contactoExistente){
        console.log (`${nombre} ya existe en su agenda`);
    } else {
        console.log ('El contacto no fue encontrado en su agenda');
    }
}

function listarContactos() {
  agenda.forEach(function (contacto) {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`========================`);
 });
}

function buscarContacto (nombre){
    let encontrado = agenda.find (function(numero){
        return numero.nombre.toUpperCase() === nombre.toUpperCase();

    });
    if (encontrado){
        console.log (`${encontrado.telefono}`);
    } else {
        console.log ('El contacto no existe');
    }
}


function eliminarContacto(nombre) {
  let eliminado = agenda.findIndex(function (eliminado) {
    return eliminado.nombre.toUpperCase() === nombre.toUpperCase();
  });

  if (eliminado > -1) {
    let validar = confirm("Está seguro que quiere eliminar el usuario?");

    if (validar) {
      agenda.splice(eliminado, 1);
      localStorage.setItem("agenda", JSON.stringify(agenda));  
      console.log("El contacto ha sido borrado");
    }
  } else {
    console.warn("El contacto no existe");
  }
}

function agendaLlena (){
    if (agenda.lenght >= 10){
        console.warn ('La agenda está llena');
    } else {
        console.log ('Aún hay lugar en la agenda');
    }
}

function huecosLibres (){
    if (agenda.lenght < 10) {
        console.log (`Le quedan ${espacio} lugares en la agenda`);
    } else {
        console.warn ('Ya no hay espacio en la agenda');
    }
}
