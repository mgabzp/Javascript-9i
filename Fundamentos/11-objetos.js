//OBJETOS

let auto={
    color: 'red',
    marca: 'Fiat',
    modelo: 'Palio',
    anio: 2018,
    encendido: false,
    encenderApagar:function(){
        this.encendido = !this.encendido;
        if (this.encendido){
            console.log ('El vehículo está encendido');
        } else{
            console.log ('El vehículo está apagado');
        }
    },
};

let alumno={
    nombre:'Carlos',
    edad: 40,
    dni: 26758467,
    curso: 'Fullstack',
    saludar: function(){
        console.log (`Hola, mi nombre es ${this.nombre}`);
    },
}

//si yo quiero llamar a una propiedad lo llamo con la variable.propiedad x ej alumno.nombre

//si quiero agregar una propiedad al objeto escribo nombre de variable.domicilio ='Av avellaneda 632', le doy enter. Tb si quiero modificarlo lo puedo hacer dsd la consola variable.propiedad =' '.

// Para eliminar un valor
delete alumno.edad;

//Para iterar: FOR IN. La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas.

for (let atributo in alumno){
    console.log (`${propiedad}: ${alumnos.[atributo]}`)
} 
//OJO! esto muestra la funcion completa. No se usa mucho así.


//ARREGLOS CON OBJETOS

let alumnos =[
    {nombre: 'Julio', curso: 'Fullstack'},
    {nombre: 'Fabrizio', curso: 'Javascript'},
];

//Para llamar a uno de los objetos se pone objeto [posicion, x ej 1]

//para llamar a una propiedad de un objeto seria: alumnos[2].nombre

//Recorrer el arreglo de objetos

alumnos.forEach(function (alumno) {
    console.log(`Nombre: ${alumno.nombre} - ${alumno.curso}`);
    console.log("----------------------------------");
  });
  
for (let index = 0; index < alumnos.length; index++) {
    console.log(`Nombre: ${alumnos[index].nombre} - ${alumnos[index].curso}`);
}
