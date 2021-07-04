
//INICIO TEMPLATE MODAL SUSCRIPCION

let uConectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarios = JSON.parse(localStorage.getItem("usuarios"));


function confirmarSuscripcion(){
    uConectado.suscripto=true;
    let encontrado = usuarios.indexOf(uConectado);
  usuarios.splice(encontrado, 1, uConectado);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("conectado", JSON.stringify(uConectado));
    sendEmail(uConectado.nombre, uConectado.email)
    
}


function sendEmail (nombre, email){
    let parametros = {
        receptor: nombre,
        emailUsuario: email
    };
    emailjs.send('service_zqyq8pe', 'suscripcionTemplate', parametros)
    .then(function(response) {
       console.log('Suscripción EXITOSA!', response.status, response.text);
    }, function(error) {
       console.log('Falló la suscripción!', error);
    });

}

//FIN TEMPLATE MODAL SUSCRIPCION