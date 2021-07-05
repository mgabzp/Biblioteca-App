let conectado = JSON.parse(localStorage.getItem('conectado')) || null;

revisarSesion();



const cerrarSesion = function () {
  localStorage.removeItem('conectado');
  location.replace("/html/home.html");
};

function revisarSesion() {
  document.querySelector("#usuarioBoton").style.visibility = "hidden";
 document.querySelector("#cerrarBoton").style.visibility = "hidden";

  if (!conectado) {
    setTimeout(function () {
      alert("Inicia sesión para poder alquilar un libro"); //!Alert más fachero
    }, 10000);
  } else {
    document.querySelector("#sesBoton").style.visibility = "hidden";
    document.querySelector("#usuarioBoton").style.visibility = "visible";
    document.querySelector("#cerrarBoton").style.visibility = "visible";
    document.querySelector("#perfLink").innerText = conectado.nombre;
    if (conectado.email === "adminbiblioteca@gmail.com") {
      //!habilitar botones admin
    }
  }
}
