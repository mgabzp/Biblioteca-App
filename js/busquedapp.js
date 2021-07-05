let libros = JSON.parse(localStorage.getItem("libros")) || [];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarioss = JSON.parse(localStorage.getItem('usuarios'))||[];
// revisarSesion();
cargarTabla(libros);

function cargarTabla(array) {
  array.forEach(function (elemento,index) {
    let card = document.createElement("div");
    card.classList.add("card","cardB","tarjeta", "col-12", "col-md-3")
    card.innerHTML = `
 
  
  <img src="${elemento.imagen}">
  <div class="card-body">
    <h5 class="card-title">${elemento.titulo}</h5>
    <div><small>Autor:${elemento.autor}</small></div>
    <div><small>Categoría:${elemento.categoria}</small></div>
    <div><small>Año:${elemento.anio}</small></div>
    
      
      </div>
      <div class="card-footer">
      <button onclick="infoLibro(${index})" >Más info</button>
      </div>`;

    let contenedor = document.querySelector("#contenedorBus");
    contenedor.appendChild(card);
    console.log(card)
  });
}







function infoLibro(id){
  libro=libros[id]

  document.querySelector("#idLibro").innerText = libro.id;
  document.querySelector("#titulo_modal").innerText = libro.titulo;
  document.querySelector("#tituloLibro").innerText = libro.titulo;
  document.querySelector("#autorLibro").innerText =libro.autor;
  document.querySelector("#votosLibro").innerText = libro.votos;
  document.querySelector("#imgLibro").src = libro.imagen;
  document.querySelector("#anioLibro").innerText = libro.anio;
  document.querySelector("#editLibro").innerText = libro.editorial;
  document.querySelector("#descLibro").innerText = libro.contraportada;
  document.querySelector("#categLibro").innerText = libro.categoria;
  document.querySelector("#alquilar").onclick = function (){ alquilar(libro);}
  document.querySelector("#modifBtn").onclick = function (){ irModif(libro);}
  document.querySelector("#elimBtn").onclick = function (){ borrarLibro(id);}
  $("#modalLibro").modal("show");
 
 
}


function filterTabla() {
  let tipoBusqueda = document.querySelector('#tipoBusqueda').value
  let texto = document.querySelector("#textBuscar");
  let libroBuscado=[];
  let libroBuscadoCat=[];
  let libroBuscadoTit=[];

  if(tipoBusqueda === "titulo"){
      libroBuscado=libros.filter(function(libro){
          return libro.titulo.toUpperCase().indexOf(texto.value.toUpperCase())>-1  })
  }else if(tipoBusqueda === "categoria"){
      libroBuscado=libros.filter(function(libro){
          return libro.categoria.toUpperCase().indexOf(texto.value.toUpperCase())>-1  })
  }else{
    limpiarTabla()
      cargarTabla(libros)
      return
  }

  if(libroBuscado.length == 0){
     swal(
      "Oh no! El libro que buscas no está en nuestra colección",
      "Por el momento no contamos con el libro que estás buscando",
      "error"
    );
  }
}




function limpiarTabla(){
  document.querySelector('#contenedorBus').innerHTML=""
}


function alquilar(libro) {
  if (conectado.email !== 'adminbiblioteca@gmail.com'&& conectado.suscripto== true){
  conectado.alquileres.push(libro);

  let encontrado = usuarioss.indexOf(conectado);
  usuarioss.splice(encontrado, 1, conectado);
  localStorage.setItem("usuarios", JSON.stringify(usuarioss));
  localStorage.setItem("conectado", JSON.stringify(conectado));
    
}}

const cerrarSesion = function () {
  localStorage.removeItem('conectado');
  location.replace("/html/home.html");
};




// ! Código para modificar y eliminar 





function irModif(libro){

  document.querySelector("#modifId").innerText = libro.id;
  document.querySelector("#tituloModif").value = libro.titulo;
  
  document.querySelector("#autorModif").value =libro.autor;
  
  document.querySelector("#imagenModif").value = libro.imagen;
  document.querySelector("#anioModif").value = libro.anio;
  document.querySelector("#editorialModif").value = libro.editorial;
  document.querySelector("#descripcionModif").value = libro.contraportada;
  document.querySelector("#categoriaModif").value = libro.contraportada;
  $("#modalModif").modal("show");
}

function actualizarLibro(e){
  e.preventDefault(); 

  
  let indice = libros.findIndex(function (elem) {
    return elem.id === libro.id;
  });
console.log(indice)//! para ver si trae bien el indice
  
  libros.splice(indice, 1, libro);

  localStorage.setItem("libros", JSON.stringify(libros));
  $("#modalModif").modal("hide");
  cargarTabla(libros);
 location.reload();
  

}


function modifLibro(e) {
  

  libro = {
    ...libro,
    [e.target.name]: e.target.value,
  };

  
}

function borrarLibro(id) {
  

  let validar=confirm(`¿Estás seguro de que quieres eliminar ${libro.titulo}?`)
      if (validar) {
    libros.splice(id, 1);
    localStorage.setItem("libros", JSON.stringify(libros));
    
    swal(
      "Eliminado!",
      `Se eliminó el libro ${libro.titulo}`,
      "success"
    );

    $("#modalLibro").modal("hide");
    limpiarTabla();
    cargarTabla(libros);
  }
}






// function revisarSesion() {
//   document.querySelector("#usuarioBoton").style.visibility = "hidden";
//   document.querySelector("#cerrarBoton").style.visibility = "hidden";
//   document.querySelector(".adminDiv").style.visibility = "hidden";

//   if (!conectado) {
//     setTimeout(function () {
//       alert("Inicia sesión para poder alquilar un libro"); //!Alert más fachero
//     }, 5000);
//   } else {
//     document.querySelector("#sesBoton").style.visibility = "hidden";
//     document.querySelector("#usuarioBoton").style.visibility = "visible";
//     document.querySelector("#cerrarBoton").style.visibility = "visible";
//     document.querySelector("#perfLink").innerText = conectado.nombre;
//     if (conectado.email === "adminbiblioteca@gmail.com") {
//       document.querySelector(".adminDiv").style.visibility = "visible";
//     }
//   }
// }
