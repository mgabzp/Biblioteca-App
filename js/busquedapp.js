let libros = JSON.parse(localStorage.getItem("libros"));
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarioss = JSON.parse(localStorage.getItem('usuarios'));
revisarSesion();
cargarTabla(libros);

function cargarTabla(array) {
  array.forEach(function (elemento,index) {
    let card = document.createElement("div");
    card.classList.add("libro-bus", "col-auto", "col-md-auto", "mx-4");
    card.innerHTML =`
    
          <div class="libro-img-bus" style="background-image: url(${elemento.imagen});"></div>
            <div class="text-libro-cont-bus">
              <div class="mr-grid-bus">
                <div class="col1-bus">
                  <h1 class="h1bus text-center">${elemento.titulo}</h1>
                  <ul class="libro-gen-bus">
                    <li>Autor: ${elemento.autor} /</li>
                    <li>Categoría: ${elemento.categoria}</li>
                  </ul>
              </div>
            </div>
            <div class="mr-grid-bus summary-row-bus">
              <div class="col2-bus">
                <h5 class="h5bus">Descripción:</h5>
              </div>
              <div class="col2-bus">
                <ul class="libro-likes-bus">
                  <li><i></i>${elemento.votos}</li>
                  <li><i class="fas fa-thumbs-up fa-1x" style="outline:none; cursor:pointer;" onclick="votar(${index})"></i></li>
                  <li><i class="fas fa-info fa-1x" style="outline:none; cursor:pointer;" onclick="infoLibro(${index})"></i></li>
                </ul>
              </div>
            </div>
            <div class="mr-grid-bus">
              <div class="col1-bus">
                <p class="libro-description-bus">${elemento.contraportada}</p>
              </div>
            </div>
          </div>`

    let contenedor = document.querySelector("#contenedorBus");
    contenedor.appendChild(card);
    
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
  document.querySelector("#alquilarLib").onclick = function (){ alquilar(libro);}
  document.querySelector("#modifBtn").onclick = function (){ irModif(libro);}
  document.querySelector("#elimBtn").onclick = function (){ borrarLibro(id);}
  $("#modalLibro").modal("show");
 
 
}


function filterTabla() {
  let tipoBusqueda = document.querySelector('#tipoBusqueda').value
  let texto = document.querySelector("#textBuscar");
  let libroBuscado=[];
  

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
    
}else{
  swal(
    "Ups! Debes estar suscripto para poder alquilar",
    "Encuentra el boton de suscripción en la barra de navegación",
    "error"
  );
}
}






// ! Código para modificar y eliminar 





function irModif(libro){
  $("#modalLibro").modal("hide");
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




const cerrarModal=function(){
  $("#modalModif").modal("hide");
}

const cerrarSesion = function () {
  localStorage.removeItem('conectado');
  location.replace("/html/home.html");
};

function revisarSesion() {
  document.querySelector("#perfilBtn").style.visibility = "hidden";
  document.querySelector(".soloAdmin").style.visibility = "hidden"
  document.querySelector(".soloUsuario").style.visibility = "hidden"
  document.querySelector("#modifBtn").style.visibility = "hidden"
  document.querySelector("#elimBtn").style.visibility = "hidden"
  document.querySelector("#alquilarLib").style.visibility = "hidden"

  if (conectado) {

          let nombre=conectado.nombre+" "
          let espacio = nombre.indexOf(" ");
           
          nombre =nombre.slice(0,espacio);
          
          
          document.querySelector("#alquilarLib").style.visibility = "visible"
          document.querySelector(".soloUsuario").style.visibility = "visible"
    document.querySelector("#sesBoton").style.visibility = "hidden";
    document.querySelector("#perfilBtn").style.visibility = "visible";
    document.querySelector("#perfilBtn").innerText =nombre;
    if (conectado.email === "adminbiblioteca@gmail.com") {
      document.querySelector(".soloAdmin").style.visibility = "visible"
      document.querySelector(".soloUsuario").style.visibility = "hidden"
      document.querySelector("#modifBtn").style.visibility = "visible"
      document.querySelector("#elimBtn").style.visibility = "visible"
      document.querySelector("#alquilarLib").style.visibility = "hidden"

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

/*Funciones suscripcion*/


function confirmarSuscripcion(){
  conectado.suscripto=true;
  let encontrado = usuarios.indexOf(conectado);
usuarios.splice(encontrado, 1, conectado);
localStorage.setItem("usuarios", JSON.stringify(usuarios));
localStorage.setItem("conectado", JSON.stringify(conectado));
  sendEmail(conectado.nombre, conectado.email)
  
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