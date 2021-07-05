let conectado = JSON.parse(localStorage.getItem("conectado")) || null;

let perfil = {
    nombre: "",
    email: "",
}

const actualizar = function (e){
conectado ={
    ...conectado,
    [e.target.nombre]: e.target.value
};
};

const guardarCambios = function (e){
    e.preventDefault();

    let perfil = conectado.find(function(user){
        return user.email === perfil.email;
    });

    localStorage.setItem('conectado', JSON.stringify(perfil));
    location.replace ("/html/home.html");


}





/*revisar sesion*/
const cerrarSesion = function () {
    localStorage.removeItem('conectado');
    location.replace("/html/home.html");
  };
  
  function revisarSesion() {
    document.querySelector("#perfilBtn").style.visibility = "hidden";
    document.querySelector(".soloAdmin").style.visibility = "hidden"
  
    if (conectado) {
            let nombre=conectado.nombre+" "
            let espacio = nombre.indexOf(" ");
             
            nombre =nombre.slice(0,espacio);
            
            
        
    
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
    }, 10000);
  }
  }
