//Traigo datos del LocalStorage en caso de haberlo
let libros = JSON.parse(localStorage.getItem('libros')) || []
let formulario = document.querySelector('form')
let otraCategoria = document.querySelector('#otraCategoria').addEventListener('change', (event) => {
    otraCategoria = event.target.value
})


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

