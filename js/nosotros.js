

let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarioss = JSON.parse(localStorage.getItem('usuarios'));
revisarSesion();







function revisarSesion() {
    document.querySelector("#perfilBtn").style.visibility = "hidden";
    document.querySelector(".soloAdmin").style.visibility = "hidden"
    document.querySelector(".soloUsuario").style.visibility = "hidden"
   
  
    if (conectado) {
  
            let nombre=conectado.nombre+" "
            let espacio = nombre.indexOf(" ");
             
            nombre =nombre.slice(0,espacio);
            
            
         
            document.querySelector(".soloUsuario").style.visibility = "visible"
      document.querySelector("#sesBoton").style.visibility = "hidden";
      document.querySelector("#perfilBtn").style.visibility = "visible";
      document.querySelector("#perfilBtn").innerText =nombre;
      if (conectado.email === "adminbiblioteca@gmail.com") {
        document.querySelector(".soloAdmin").style.visibility = "visible"
        document.querySelector(".soloUsuario").style.visibility = "hidden"
      
  
      }
    } else {
      setTimeout(function () {
        swal(
          "Hola Forastero!",
          "Registrate o inicia sesión para poder alquilar libros, votar o suscribirte",
          "info"
        );
    }, 8000);
  }
  }