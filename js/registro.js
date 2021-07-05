
let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;

class Usuario{
  constructor(id,nombre,email,contrasenia,imagen,suscripto,alquileres){
    this.id=id;
    this.nombre=nombre;
    this.email=email;
    this.contrasenia=contrasenia;
    this.imagen=imagen;
    this.suscripto=suscripto;
    this.alquileres=alquileres;

  }
}



let usuario= new Usuario(Math.random().toString(18).substr(8),'','','','https://static.vecteezy.com/system/resources/previews/000/350/297/original/vector-reading-icon.jpg',false,[]);
  
let formulario=document.querySelector('form');
const actualizar = function(e){
    usuario= {
        ...usuario,
        [e.target.name]:e.target.value,
    }

}
const envioForm=function(e){
    e.preventDefault();
  let validar= validarUsuario(usuario.email)
  if (validar){
    
    swal(
      "Ups! Ya existe un usuario registrado con ese email",
      "Si olvidaste tu contraseña puedes recuperarla en la sección de inicio de sesión",
      "error"
    );
    return
  }else if(usuario.nombre && usuario.email && usuario.contrasenia){
        usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        formulario.reset();
        enviarConfirmacion(usuario.nombre,usuario.email);
        swal(
          "Registro de usuario finalizado exitosamente!!",
          "Bienvenido a la comunidad Bookshelf, serás redirigido a la página de inicio de sesión",
          "success"
        );
        setTimeout(function () {
          location.replace("/html/login.html");
        }, 4000)
        
        
        
    }
}


 
  



function enviarConfirmacion(nombre,email){
  let parametros = {
    receptor: nombre,
    emailUsuario: email
};
 
emailjs.send('service_zqyq8pe', 'registroTemplate', parametros)
    .then(function(response) {
       console.log('Registro exitoso', response.status, response.text);
    }, function(error) {
       console.log('Algo salió mal', error);
    });
}

function validarUsuario(email){
  let validar = usuarios.find(function(usuario){
return usuario.email.toLowerCase() === email.toLowerCase()
  })
  if (validar){
      return true;
  }else{
      return false;
  }
}