let conectado = JSON.parse(localStorage.getItem("conectado")) || null;

let perfil = {
    nombre: "",
    email: "",
}

const actualizar = function (e){
conectado ={
    ...conectado,
    [e.target.nombre]: e.target.value
};
};

const guardarCambios = function (e){
    e.preventDefault();

    let perfil = conectado.find(function(user){
        return user.email === perfil.email;
    });

    localStorage.setItem('conectado', JSON.stringify(perfil));
    location.replace ("/html/home.html");


}


