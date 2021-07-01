// let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;

vistaPerfil()

class Perfil{
    constructor(nombre, email, contraseniaNueva, imagen){
        this.nombre =nombre
        this.email=email
        this.contraseniaNueva=contraseniaNueva
        this.imagen= imagen
    }
}

let perfil= new Perfil ('', '', '', '');
let formulario = document.querySelector('form')

const handleChange = function(e){
    perfil = {
        ...perfil,
        [e.target.name] : e.target.value
    }
}

const handleSubmit = function(e){
    e.preventDefault()
    let validar = validarContrasenia (perfil.contraseniaNueva)

    if(validar){
        alert ('Debe elegir una contraseña distinta'); 
        } else if (perfil.nombre && perfil.email && perfil.contraseniaNueva && perfil.imagen) {
            conectado.push(perfil)
            localStorage.setItem('conectado', JSON.stringify(conectado))
            formulario.reset();
            alert ('Se actualizaron sus datos');
            location.replace ('/html/home.html')
        }   
}

function validarContrasenia (contrasenia){
    let validar = conectado.find (function(perfil){
        return perfil.contraseniaNueva.toLowerCase() === contrasenia.toLowerCase()
    })
    if (validar){
        return true;
    } else {
        return false;
    }

}


function vistaPerfil(){
    //seccion imagen
    document.querySelector('.img_perfil').src = conectado.imagen
    document.querySelector('.nombre-usuario').innerText = conectado.nombre
    document.querySelector('.email-usuario').innerText = conectado.email

    //seccion datos
    document.querySelector('#nombreCompleto').value = conectado.nombre
    document.querySelector('#email').value= conectado.email
    document.querySelector('#alquileres').value = conectado.alquileres
    document.querySelector('#contrasenia').value = conectado.contrasenia
    
}







