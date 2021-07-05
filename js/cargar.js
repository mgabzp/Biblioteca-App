//Traigo datos del LocalStorage en caso de haberlo
let libros = JSON.parse(localStorage.getItem("libros"));
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let usuarioss = JSON.parse(localStorage.getItem('usuarios'));
let formulario = document.querySelector('form')
let otraCategoria = document.querySelector('#otraCategoria').addEventListener('change', (event) => {
    otraCategoria = event.target.value
})

revisarSesion();
//Creo la clase para crear instancias de libros
class Libro{
    constructor(id, categoria, titulo, imagen, contraportada, autor, editorial, emision, votos){
        this.id = id
        this.categoria = categoria
        this.titulo = titulo
        this.imagen = imagen
        this.contraportada = contraportada
        this.autor = autor
        this.editorial = editorial
        this.emision = emision
        this.votos = votos
    }
}

// //Creo un libro generico 
let libro = {
    id : idGenerator(),
    categoria : "Ficcion",
    titulo : "",
    imagen : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
    contraportada : "",
    autor : "",
    editorial : "",
    emision : "2016",
    votos : 0
}

//Funcion para manejar los cambios del formulario
const handleChange = function(event){
    libro = {
        ...libro,
        [event.target.name] : event.target.value
    }
}

const handleSubmit = function(event){
    event.preventDefault()

    if(libro.categoria && libro.titulo && libro.contraportada && libro.autor && libro.editorial && libro.emision){
        console.log(libro.categoria)
        if(libro.categoria === "Otro"){
            libro.categoria = otraCategoria         
        }
        libros.push(libro)
        localStorage.setItem('libros', JSON.stringify(libros))
        formulario.reset()
    }else{
        alert("Faltan datos")
    }

}

//MODIFICAR VISTA PREVIA PARA QUE AL APRETAR EL BOTON NO REINICIE LOS VALORES
//CAMBIAR EL VALOR DE LA VARIABLE CATEGORIA CON UN IF
function vistaPrevia(){
    document.querySelector('#tituloCard').innerText = libro.titulo
    document.querySelector('#editorialCard').innerText = libro.editorial
    document.querySelector('#categoriaCard').innerText = libro.categoria
    document.querySelector('#emisionCard').innerText = libro.emision
    document.querySelector('.img_card').src = libro.imagen
}

//Funcion para generar ID de los libros
function idGenerator(){
    return Math.random().toString(36).substr(2,9).toUpperCase()
}
const cerrarSesion = function () {
    localStorage.removeItem('conectado');
    location.replace("/html/home.html");
  };
  
  /*funcion que controla quién está conectado*/
  function revisarSesion() {
    document.querySelector("#perfilBtn").style.visibility = "hidden";
    document.querySelector(".soloAdmin").style.visibility = "hidden";
  
    if (conectado && conectado.email === "adminbiblioteca@gmail.com") {
          let nombre=conectado.nombre+" "
            let espacio = nombre.indexOf(" ");
             
            nombre =nombre.slice(0,espacio);
        document.querySelector("#sesBoton").style.visibility = "hidden";
         document.querySelector("#perfilBtn").style.visibility = "visible";
        document.querySelector("#perfilBtn").innerText =nombre;
        document.querySelector(".soloAdmin").style.visibility = "visible"
        document.querySelector(".soloUsuario").style.visibility = "hidden"
      }else{
        swal(
            "Acceso restringido",
            "Contenido solo disponible para administradores, serás redirigido a nuestra página de inicio",
            "error"
          );
          setTimeout(function () {
            location.replace("/html/home.html");
        }, 4000)
      }
  }
