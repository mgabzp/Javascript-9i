let agenda =JSON.parse (localStorage.getItem ('agenda')) || []
let memo = 10

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

//Agregar contactos a la agenda

function addContact(){
    let nombre = document.querySelector ("#nombreText");
    let telefono = document.querySelector ("#telefText");



    if (!nombre.value || !telefono.value){
        alert ('Faltan datos')
        nombre.focus (); //es para poner el foco en un input especifico. Para que se ponga bordeada una casilla de un formulario x ej.
    } else {
        let verify = verifyContact (nombre.value) //VALUE sirve para que devuelva el contenido del campo o input, no el ID completo.
        if (verify){
            alert ('El contacto ya existe en su agenda')
        } else {
            if (memo>0){
                agenda.push (new Contacto(nombre.value.toUpperCase(), telefono.value));
                localStorage.setItem ('agenda', JSON.stringify(agenda));
                memo -= 1;
            } else{
                alert ("Memoria llena");
            }
            updateAgenda ()
        }

    }
}

function verifyContact (nombre){
    let verify= agenda.find (function(contacto){
        return contacto.nombre.toLowerCase() === nombre.toLowerCase ()
    })
    if (verify){
        return true
    } else {
        false
    }
}

function updateAgenda(){
    document.querySelector ("#nombreText").value = "";
    
    document.querySelector ("#telefText").value = "";
    document.querySelector ("#nombreText").focus() = "";
    agenda = JSON.parse (localStorage.getItem ("agenda"));

    cargarTabla (agenda);

}

function cargarTabla (array){
    document.querySelector ('#cuerpoTabla').innerHTML= ""
    array.forEach(function(elemento, index){
        let fila = document.createElement ('tr') //tr es = a table row
        fila.classList = 'text-center'
        
        let datos = `
        <td> ${elemento.nombre} </td>
        <td> ${elemento.telefono} </td>
        `

        fila.innerHTML= datos; //el tipo de elemento creado determina si es innerHTML (etiquetas, elemento contenedor) o innerText (x ej 'p', 'span')

        let cuerpo = document.querySelector ('#cuerpoTabla');
        cuerpo.appendChild(fila)
    });
}

cargarTabla (agenda);