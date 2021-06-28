let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];

class Libro {
    constructor(id,categoria,titulo,imagen,contraportada,autor,editorial,anio)
    {
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
  
  let libro1 = new Libro(
    01,
    "Fantasia",
    "Alicia en el pais de las maravillas",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b7df7d12920133.5626ee0d99b8b.jpg",
    "http://1.bp.blogspot.com/_QWt0yHvRiyo/S8ofwGakmrI/AAAAAAAAAJg/hWl-55BTmZI/s1600/Alicia+en+el+pais+de+las+maravillas.jpg",
    "Lewis Carroll",
    "Atlas",
    1900
  );let libro2 = new Libro(
    02,
    "Vida real",
    "En auschwitz no habia prozac",
    "https://www.libroclub.com/wp-content/uploads/2020/10/9786070772146-1150x1764.jpg",
    "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/9786070772146_3.jpg",
    "edith Eger",
    "atlas",
    2019
  );
  let libro3 = new Libro(
    03,
    "Autoayuda",
    "¿Quien se robo mi queso?",
    "https://www.granvalparaiso.cl/wp-content/uploads/2014/10/quiensehallevadomiqueso.jpg",
    "http://ecx.images-amazon.com/images/I/71spxbDrcUL.jpg",
    "Spenser Johnson",
    "atlas",
    1970
  );
  let libros=[libro1,libro2,libro3]
  
  function cargarTabla(array){
      array.forEach(function(elemento,index){
          let card = document.createElement('div')
          card.innerHTML = `
          <div class="card cardB">
         <img src="${elemento.imagen}">
         <div class="card-body">
        <h5 class="card-title">${elemento.titulo}</h5>
        <!-- <small class="text-muted">Fecha Estreno </small> -->
        <div><small>Autor:${elemento.autor}</small></div>
        <div><small>Categoría:${elemento.categoria}</small></div>
        <div><small>Año:${elemento.anio}</small></div>
        <!-- <p class="card-text">Descripción libro</p> -->
        </div>
        <div class="card-footer">
        <div class="userDiv">
        <button>Más info</button>
        <button>Alquilar</button>
         </div>
         <div class="adminDiv">
        <button>Modificar</button>
        <button>Eliminar</button>
      </div>
    </div>
  </div>`
  
    let contenedor= document.querySelector("#contenedor")
    contenedor.appendChild(card);})
    }
  
  function filterTabla() {
    let tipoBusqueda = document.querySelector('#tipoBusqueda').value
    let texto = document.querySelector("#textBuscar");

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

    if(libroBuscado.length !== 0){
        limpiarTabla()
        cargarTabla(libroBuscado)
    }else{
        alert("No se encontraron coincidencias")
    }
}

  
  function limpiarTabla(){
    document.querySelector('#contenedor').innerHTML=""
  }
  
  cargarTabla(libros)