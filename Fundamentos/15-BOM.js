//Browser objet Model (BOM)

//Window

//El objeto window representa la ventana que contiene un doc DOM

//NAVIGATOR

let browser
let userAgent= navigator.userAgent;

if (userAgent.indexOf('Chrome')> -1){
  browser = 'Google Chrome';
} else if (userAgent.indexOf('Safari')> -1){
browser = 'Apple Safari';
} else if (userAgent.indexOf('Firefox')> -1){
  browser = 'Mozilla Firefox';
}

alert (`Usted está usando ${browser}`);

//LOCATION
// location.reload (); //para recargar la pag

// location.assign ("https://google.com") //Para ir a una pag dsd js.

//location.replace ("https://google.com") // sirve para ir a otra pag pero guarda el historial, se puede volver

location.search= data //es una propiedad para buscar en una funcion.

//HISTORY

history.go () //adentro va la cant de paginas que quiero ir hacia adelante o atras en el historial del navegador. Con valores negativos hacia atras.

history.go(1); //nos movemos adelante en el historial
history.go(-2); //nos movemos atras en el historial