let agenda =JSON.parse (localStorage.getItem ('agenda')) || []
let memo = 10 - agenda.length;

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

//Agregar contactos a la agenda

function contarRegistro (array){
    let total = JSON.parse (localStorage.getItem("agenda"));
    // console.log (array.length);
    document.querySelector ("#count").innerText = array.length + " de " + total.length;
}

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
                memo -= 1; // memo = memo -1
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
    // document.querySelector ("#nombreText").focus() = "";
    document.querySelector ("#telefText").value = "";
    
    agenda = JSON.parse (localStorage.getItem ("agenda"));

    contarRegistro (agenda);
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
        <td> <button class = "btn btn-sm btn-danger" onclick="delContact(${index})">X</button></td>
        `

        fila.innerHTML= datos; //el tipo de elemento creado determina si es innerHTML (etiquetas, elemento contenedor) o innerText (x ej 'p', 'span')

        let cuerpo = document.querySelector ('#cuerpoTabla');
        cuerpo.appendChild(fila)
    });
}

function filterTabla (){
let texto = document.querySelector ("#textBuscar")
agenda =JSON.parse (localStorage.getItem ('agenda'));

agenda= agenda.filter (function(contacto){
    return contacto.nombre.indexOf (texto.value.toUpperCase()) > -1;

});

texto.value = "";
texto.focus ();

contarRegistro (agenda);
cargarTabla (agenda);
}

function delContact (id){
    // console.log (id);
    let agendaTotal = JSON.parse (localStorage.getItem ("agenda"));

    let index = agendaTotal.findIndex (function(contacto){
        return contacto.nombre === agenda[id].nombre;
    });

    console.log (index);

    let validar = confirm ("¿Está seguro que quiere borrar el contacto?");

    if (validar){
        agendaTotal.splice(index, 1);
        localStorage.setItem("agenda", JSON.stringify(agendaTotal));
        memo +=1;
        updateAgenda();
    }

}


contarRegistro (agenda);
cargarTabla (agenda);