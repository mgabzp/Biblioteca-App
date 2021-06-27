//Traigo datos del LocalStorage en caso de haberlo
let libros = JSON.parse(localStorage.getItem('libros')) || []

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
// let libro = {
//     id = Math.random().toString(36).substr(2,9).toUpperCase(),
//     categoria = "",
//     titulo = "",
//     imagen = "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
//     contraportada = "",
//     autor = "",
//     editorial = "",
//     emision = "",
//     votos = 0
// }

// //Funcion para manejar los cambios del formulario
// const handleChange = function(event){
//     libro = {
//         ...libro,
//         [event.target.name] : event.target.value
//     }
// }

//Creo un libro a partir de los datos del formulario
let id = idGenerator()
let titulo = document.querySelector('#tituloCarga')
// let categoria = actualizarCategoria()
let imagen = document.querySelector('#imagenCarga')
let contraportada = document.querySelector('#contraportadaCarga')
let autor = document.querySelector('#autorCarga')
let editorial = document.querySelector('#editorialCarga')
let emision = document.querySelector('#emisionCarga')
let votos = 0


//Funcion para agregar libros
function addLibro(){
    categoria = actualizarCategoria()
    console.log(categoria.value)
    if(categoria.value && titulo.value && contraportada.value && autor.value && editorial.value && emision.value){
        if(!imagen.value){
            imagen.value = "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
        }

        libros.push(new Libro(id, categoria.value, titulo.value, imagen.value, contraportada.value, autor.value, editorial.value, emision.value, votos))
        localStorage.setItem('libros', JSON.stringify(libros))
    }else{
        alert("Faltan datos")
    }

}

function vistaPrevia(){
    categoria = actualizarCategoria()
    document.querySelector('#tituloCard').innerText = titulo.value
    document.querySelector('#editorialCard').innerText = editorial.value
    document.querySelector('#categoriaCard').innerText = categoria.value
    document.querySelector('#emisionCard').innerText = emision.value
    document.querySelector('.img_card').src = imagen.value
}

function actualizarCategoria(){
    catSelect = document.querySelector('#categoriaCarga')

    if(catSelect.value === "Otro"){
        catSelect = document.querySelector('#otraCategoria')
    }

    return catSelect
}

//Funcion para generar ID de los libros
function idGenerator(){
    return Math.random().toString(36).substr(2,9).toUpperCase()
}