/*Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/


class Producto {
    constructor (codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }

    imprimeDatos (){
        document.write (`<br> Su producto es <b>${this.nombre}</b>, <br> Su código es <b>${this.codigo}</b> <br> Su precio es <b>${this.precio}</b> <br>`)
    }
}

let producto1 = new Producto (222654,'Manzana', '$7.49');
let producto2 = new Producto (222655,'Bandeja de Frutillas', '$49.99');
let producto3 = new Producto (222656, 'Banana', '$15.49');

let productos =[producto1, producto2, producto3];

for (let i= 0; i < productos.length; i++){
    productos[i].imprimeDatos();
}

