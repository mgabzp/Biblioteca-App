
let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
revisarSesion();
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
    alert('Ya existe un usuario registrado con ese email');
    return
  }else if(usuario.nombre && usuario.email && usuario.contrasenia){
        usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        formulario.reset();
        enviarConfirmacion(usuario.nombre,usuario.email);
        alert('Registro de usuario finalizado exitosamente') //!Cambiar por alert fachero
        location.replace('/html/home.html')
        
        
    }
}


 
  


function revisarSesion() {
  document.querySelector("#usuarioBoton").style.visibility = "hidden";
  document.querySelector("#cerrarBoton").style.visibility = "hidden";
  

  if (conectado) {
    
    document.querySelector("#sesBoton").style.visibility = "hidden";
    document.querySelector("#usuarioBoton").style.visibility = "visible";
    document.querySelector("#cerrarBoton").style.visibility = "visible";
    document.querySelector("#perfLink").innerText = conectado.nombre;
    if (conectado.email === "adminbiblioteca@gmail.com") {
      document.querySelector(".adminDiv").style.visibility = "visible";
    }
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