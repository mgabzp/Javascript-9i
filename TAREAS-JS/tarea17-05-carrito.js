
let carrito = [];

function agregarProducto() {
    let agregar = prompt ('Ingrese un producto');
    if (agregar){
        carrito.push(agregar.toUpperCase());
        listarProducto();
    }else{
        console.error ('No ingresó ningún producto');
    }
}


function listarProducto(){
    let total= 0
    for (i of carrito){
        total = total + 1
        console.log (`${total} - ${[i]}`);
    }
}

function buscarProducto (){
    let buscar = (prompt ('Ingrese ítem a buscar')).toUpperCase();
    if (carrito.includes(buscar)=== true){
            console.log (`${buscar} se encuentra en la posición ${carrito.indexOf(buscar)+1}`);
    } else{
            console.error ('Este producto no se encuentra en su carrito.');
    }
}   


function  eliminarProducto (){
    let eliminar = (prompt('Ingrese el producto a eliminar')).toUpperCase();
    // let validar = confirm ('¿Está seguro que quiere eliminar ese producto?'); //sirve para validar una acción antes de proceder a eliminarla.
    prodEliminado= carrito.indexOf (eliminar);
    if (prodEliminado === -1){
        console.log ('El producto ingresado no existe');
    } else{
        console.log (`Se ha eliminado ${carrito.splice(prodEliminado, 1)}`);
    }
}

function filtrarProducto (){
    let filtrar = prompt('Ingrese producto a filtrar');
    if (filtrar){
            let filtrado = carrito.filter(function(prod) {
            return prod.indexOf(filtrar.trim().toUpperCase()) > -1;
        });

        console.log (`Sus productos son ${filtrado}`);
    } else {
        console.error ('No existen productos con esas letras');
    }
}



