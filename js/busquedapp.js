let libros = JSON.parse(localStorage.getItem("libros")) || [];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
revisarSesion();
class Libro {
  constructor(
    id,
    categoria,
    titulo,
    imagen,
    contraportada,
    autor,
    editorial,
    anio
  ) {
    this.id = id;
    this.categoria = categoria;
    this.titulo = titulo;
    this.imagen = imagen;
    this.contraportada = contraportada;
    this.autor = autor;
    this.editorial = editorial;
    this.anio = anio;
  }
}
if (libros.length == 0) {
  libros.push(
    new Libro(
      01,
      "Fantasia",
      "Alicia en el pais de las maravillas",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b7df7d12920133.5626ee0d99b8b.jpg",
      "http://1.bp.blogspot.com/_QWt0yHvRiyo/S8ofwGakmrI/AAAAAAAAAJg/hWl-55BTmZI/s1600/Alicia+en+el+pais+de+las+maravillas.jpg",
      "Lewis Carroll",
      "Atlas",
      1900
    )
  );
  libros.push(
    new Libro(
      02,
      "Vida real",
      "En auschwitz no habia prozac",
      "https://www.libroclub.com/wp-content/uploads/2020/10/9786070772146-1150x1764.jpg",
      "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/9786070772146_3.jpg",
      "edith Eger",
      "atlas",
      2019
    )
  );
  libros.push(
    new Libro(
      03,
      "Autoayuda",
      "¿Quien se robo mi queso?",
      "https://www.granvalparaiso.cl/wp-content/uploads/2014/10/quiensehallevadomiqueso.jpg",
      "http://ecx.images-amazon.com/images/I/71spxbDrcUL.jpg",
      "Spenser Johnson",
      "atlas",
      1970
    )
  );
  localStorage.setItem("libros", JSON.stringify(libros));
}

function cargarTabla(array) {
  array.forEach(function (elemento,index) {
    let card = document.createElement("div");

    card.innerHTML = `
 
  <div class="card cardB tarjeta col-12 col-md-3">
  <img src="${elemento.imagen}">
  <div class="card-body">
    <h5 class="card-title">${elemento.titulo}</h5>
    <div><small>Autor:${elemento.autor}</small></div>
    <div><small>Categoría:${elemento.categoria}</small></div>
    <div><small>Año:${elemento.anio}</small></div>
    
      
      </div>
      <div class="card-footer">
      <button onclick="infoLibro(${index})" >Más info</button>
      </div>
     
      
</div>`;

    let contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(card);
  });
}

function filterTabla() {
  let texto = document.querySelector("#textBuscar");
  libros = libros.filter(function (libro) {
    return libro.titulo.toUpperCase().indexOf(texto.value.toUpperCase()) > -1;
  });
  limpiarTabla();
  cargarTabla(libros);
}

function limpiarTabla() {
  document.querySelector("#contenedor").innerHTML = "";
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




function alquilar(libro) {
  if (conectado.email !== 'adminbiblioteca@gmail.com'){
  conectado.alquileres.push(libro);

  let encontrado = usuarios.indexOf(conectado);
  usuarios.splice(encontrado, 1, conectado);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
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
  

  let validar = confirm(`Está seguro que quiere borrar el libro ${libro.titulo}`);

  if (validar) {
    libros.splice(id, 1);
    localStorage.setItem("libros", JSON.stringify(libros));
    
    alert(`Se eliminó el libro ${libro.titulo}`);
    

    $("#modalLibro").modal("hide");
    limpiarTabla();
    cargarTabla(libros);
  }
}





function revisarSesion() {
  document.querySelector("#usuarioBoton").style.visibility = "hidden";
  document.querySelector("#cerrarBoton").style.visibility = "hidden";
  document.querySelector(".adminDiv").style.visibility = "hidden";

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
      document.querySelector(".adminDiv").style.visibility = "visible";
    }
  }
}
cargarTabla(libros);