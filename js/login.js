let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let usuario = {
    email: "",
    contrasenia: "",
  };
   
  const actualizar = function (e) {
     
    usuario = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
  };
  
  const envioForm = function (e) {
    e.preventDefault();
  
    
  
    let socio = usuarios.find(function (user) {
      return user.email === usuario.email;
    });
  
    if (socio) {
      if (usuario.contrasenia === socio.contrasenia) {
       
        swal(
          `Bienvenido nuevamente ${socio.nombre}`,
          "Estamos felices de tenerte de vuelta en Bookshelf",
          "success"
        );

        localStorage.setItem('conectado', JSON.stringify(socio));
        setTimeout(function () {
        location.replace("/html/home.html");
      }, 3000)
      } else {
        swal(
          "Ups! Algo salió mal...",
          "Email o contraseña incorrectos, intenta nuevamente",
          "error"
        );
      }
    } else {
      swal(
        "Ups! Algo salió mal...",
        "Email o contraseña incorrectos, intenta nuevamente",
        "error"
      );
    }
  
    
  };
  


 