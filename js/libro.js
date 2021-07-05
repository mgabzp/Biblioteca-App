let libros = JSON.parse(localStorage.getItem("libros")) || [];
let conectado = JSON.parse(localStorage.getItem("conectado")) || {};
let libro = JSON.parse(localStorage.getItem('libro'))
revisarSesion();
verLibro();




function verLibro(id){
    libro=libros[id]
    document.querySelector("#tituloLibro").innerText = libro.titulo;
    document.querySelector("#autorLibro").innerText =libro.autor;
    document.querySelector("#votosLibro").innerText = libro.votos;
    document.querySelector("#imgLibro").src = libro.imagen;
    document.querySelector("#anioLibro").innerText = libro.anio;
    document.querySelector("#editLibro").innerText = libro.editorial;
    document.querySelector("#descLibro").innerText = libro.contraportada;
    
   
}

function actualizarLibro(e){
    e.preventDefault(); 

    
    let indice = libros.findIndex(function (elem) {
      return elem.id === libro.id;
    });
  console.log(indice)//! para ver si trae bien el indice
    
    libros.splice(indice, 1, libro);
  
    localStorage.setItem("libros", JSON.stringify(libros));
   
  
    

}


function modifLibro(e) {
    
  
    libro = {
      ...libro,
      [e.target.name]: e.target.value,
    };
  
    
  }

  function borrarLibro(id) {
    
  
    let validar = confirm(`Está seguro que quiere borrar el libro ${libro.titulo}`);
  
    if (validar) {
      libros.splice(id, 1);
      localStorage.setItem("libros", JSON.stringify(libros));
  
      alert(`Se eliminó el libro ${libro.titulo}`);
      
    }
  }

  function revisarSesion() {
    document.querySelector("#usuarioBoton").style.visibility = "hidden";
    document.querySelector("#cerrarBoton").style.visibility = "hidden";
  
    if (!conectado) {
      setTimeout(function () {
        alert("Inicia sesión para poder alquilar un libro"); //!Alert más fachero
      }, 5000);
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
  