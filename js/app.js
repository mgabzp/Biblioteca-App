// Cargo la clave Libros del Storage con el array Libros
let libros = JSON.parse(localStorage.getItem("libros"));
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
revisarSesion();




//Funcion cargarCards filtra, ordena y reenderiza las crds de acuerdo a la categoría

function cargarCards(categoria)
{

   //Filtro libros segun la categoria
  let destacados= libros.filter(function (libroX){
    let catX = libroX.categoria;
    return catX === categoria;
  
    });

  //Ordenos los Libros filtrados por categoria
  let ordenados = destacados.sort((a,b)=>{
    if(a.votos<b.votos) return -1;
    if(a.votos>b.votos) return 1;
    return 0;
    });
    ordenados.reverse();
    
    
    for (let index = 0; index < 3 ; index++)
    {
      const elemento = ordenados[index];
      let libro = elemento.titulo
   
      let idLibro = libros.findIndex(function (libro1) {
        return libro1.titulo === libro
      })
      let card = document.createElement('div')
      card.classList.add("Libro-home", "col-auto", "col-md-auto", "mx-4");
      card.innerHTML =`
      
            <div class="libro-img-home" style="background-image: url(${elemento.imagen});"></div>
              <div class="text-libro-cont-home">
                <div class="mr-grid-home">
                  <div class="col1-home">
                    <h1 class="h1Ro">${elemento.titulo}</h1>
                    <ul class="libro-gen-home">
                      <li>Autor: ${elemento.autor} /</li>
                      <li>Categoría: ${elemento.categoria}</li>
                    </ul>
                </div>
              </div>
              <div class="mr-grid-home summary-row-home">
                <div class="col2-home">
                  <h5 class="h5Ro">Descripción:</h5>
                </div>
                <div class="col2-home">
                  <ul class="libro-likes-home">
                    <li><i></i>${elemento.votos}</li>
                    <li><i class="fas fa-thumbs-up fa-1x" style="outline:none; cursor:pointer;" onclick="votar(${idLibro})"></i></li>
                    <li><i class="fas fa-info fa-1x" style="outline:none; cursor:pointer;" onclick="infoLibro(${idLibro})"></i></li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid-home">
                <div class="col1-home">
                  <p class="libro-description-home">${elemento.contraportada}</p>
                </div>
              </div>
            </div>` 
      

        let contenedor= document.getElementById(categoria);

        contenedor.appendChild(card);

    }
         
}

cargarCards("Terror");
cargarCards("Drama");
cargarCards("Ficción");


function votar(id) {

 libros[id].votos ++ == 1
 localStorage.setItem("libros", JSON.stringify(libros))
 location.reload()
}

function idGenerator(){
  return Math.random().toString(36).substr(2,9).toUpperCase()
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

/*Revisar sesion*/

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


























