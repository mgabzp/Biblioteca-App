let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
let conectado = JSON.parse(localStorage.getItem("conectado")) || null;
let perfil = conectado

vistaPerfil()

let formulario = document.querySelector('form')
let formularioPass = document.querySelector('#form2')

const handleChange = function(e){
    perfil = {
        ...perfil,
        [e.target.name] : e.target.value
    }
}

const handleSubmit = function(e){
    e.preventDefault()
    let validar = validarContrasenia (perfil)
    let index = usuarios.findIndex(function(item){
        return item.id === perfil.id
      })

    if(validar){
        alert ('Debe elegir una contraseña distinta');
        } else if (perfil.nombre && perfil.email && perfil.imagen){
            conectado = perfil
            usuarios.splice(index, 1, perfil)
            localStorage.setItem('conectado', JSON.stringify(conectado))
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            formulario.reset();
            alert ('Se actualizaron sus datos');
            location.replace ('/html/home.html')
        }   
}

function validarContrasenia (perfil){
    
    if(perfil.contrasenia === conectado.contrasenia){
        return true
    }else{
        return false
    }
}

const cambiarClave= function(e){
    e.preventDefault()
    let clave1 = document.querySelector("#clave1").value
    let clave2 = document.querySelector ("#clave2").value
    let index = usuarios.findIndex(function(item){
        return item.id === perfil.id
      })
    
    if (clave1 === clave2){
        perfil.contrasenia = clave1
        usuarios.splice(index, 1, perfil)
        alert ('Las claves coinciden')
        alert ('Se actualizaron sus datos')
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        localStorage.setItem('conectado', JSON.stringify(perfil))
        formularioPass.reset();
    } else {
        alert ('Las claves no coinciden, por favor reingresar clave.')
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
    document.querySelector('#imagenPerfil').value= conectado.imagen
    document.querySelector('#alquileres').value = conectado.alquileres  
}







