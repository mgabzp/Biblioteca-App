
//INICIO TEMPLATE MODAL SUSCRIPCION

let uConectado = JSON.parse(localStorage.getItem("conectado")) || null;
// let uSuscripto = JSON.parse(localStorage.getItem("suscripto")) || null;


function confirmarSuscripcion(){
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