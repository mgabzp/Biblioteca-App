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
        alert(`Bienvenido nuevamente ${socio.nombre}`);//!Embellecer este alert también!!
  
        localStorage.setItem('conectado', JSON.stringify(socio));
  
        location.replace("/html/home.html");
      } else {
        alert("usuario o contraseña incorrectos");
      }
    } else {
      alert("usuario o contraseña incorrectos");
    }
  
    
  };
  


 