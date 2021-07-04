let conectado = JSON.parse(localStorage.getItem('conectado')) || null;

revisarSesion();



const cerrarSesion = function () {
  localStorage.removeItem('conectado');
  location.replace("/html/home.html");
};

function revisarSesion() {
  document.querySelector("#perfilBtn").style.visibility = "hidden";
 

  if (!conectado) {
    setTimeout(function () {
      alert("Inicia sesión para poder alquilar un libro"); //!Alert más fachero
    }, 10000);
  } else {
    document.querySelector("#sesBoton").style.visibility = "hidden";
    document.querySelector("#perfilBtn").style.visibility = "visible";
    document.querySelector("#perfilBtn").innerText = conectado.nombre;
    if (conectado.email === "adminbiblioteca@gmail.com") {
      //!habilitar botones admin
    }
  }
}
