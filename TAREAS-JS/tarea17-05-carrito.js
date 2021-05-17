
let carrito = [];

function agregarProducto() {
    let agregar = (prompt ('Ingrese un producto')).toUpperCase();
    if (agregar !== null || ''){
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
    let buscar = (prompt ('Ingrese ítem a buscar')).toUpperCase();if (carrito.includes(buscar)=== true){
            console.log (`${buscar} se encuentra en la posición ${carrito.indexOf(buscar)+1}`);
    } else{
            console.error ('Este producto no se encuentra en su carrito.');
    }
}   


function  eliminarProducto (){
    let eliminar = (prompt('Ingrese el producto a eliminar')).toUpperCase();
    prodEliminado= carrito.indexOf (eliminar);
    if (prodEliminado === -1){
        console.log ('El producto ingresado no existe');
    } else{
        console.log (`Se ha eliminado ${carrito.splice(prodEliminado, 1)}`);
    }
}

// function filtrarProducto (){
//     let filtrar= (prompt('Ingrese producto a filtrar')).toUpperCase();
//     let filtrado = []
//     if (filtrar !== ''){
//             filtrado = carrito.filter(function(prod) {
//             return prod.includes(filtrar)
//         });
//     } else if (filtrado !== ''){
//         console.log (`Sus productos son ${filtrado}`);
//     } else {
//         console.error ('No existen productos con esas letras');
//     }
// }



