//Cargo la clave Libros del Storage con el array Libros
// let Libros = [];
// localStorage.setItem("Libros", JSON.stringify(Libros));

// let Libros=[

//   { categoria: "Accion", votos: 40, titulo: "El Aleph", imagen:"", contraportada:"sasa", autor:"Borges", editorial:"Atenas", anio:"1982" },
//   { categoria: "Accion", votos:80, titulo: "Rayuela", imagen:"", contraportada:"spok", autor:"Cortazar", editorial:"Atenas", anio:"1982"},
//   { categoria: "Accion", votos:1, titulo: "Los Siete Locos", imagen:"", contraportada:"tgfdr", autor:"Roberto Arlt", editorial:"Atenas", anio:"1982"},
//   { categoria: "Accion", votos:100, titulo: "La Tregua", imagen:"", contraportada:"sasa", autor:"Benedetti", editorial:"Atenas", anio:"1982"},
//   { categoria: "Terror", votos:78, titulo: "Dracula", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Terror", votos:1, titulo: "Frankestein", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Terror", votos:49, titulo: "La Llorona", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Ficcion", votos:6, titulo: "Guerra de Mundos", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Ficcion", votos:77, titulo: "Robetech", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Ficcion", votos:57, titulo: "Viaje a las Estrellas", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},
//   { categoria: "Ficcion", votos:98, titulo: "Hombres de Negro", imagen:"", contraportada:"sasa", autor:"Bram Stoker", editorial:"Atenas", anio:"1982"},

// ];


// localStorage.setItem("Libros", JSON.stringify(Libros));

//Traigo a Libros los datos de la clave Libros sino hay, lo inicializo en vacio
let Libros = JSON.parse(localStorage.getItem("Libros")) || [];


//Funcion Carga Cards ordenadas  segun la categoria

function cargarCards(categoria){

 //Filtro libros segun la categoria
 let destacados= Libros.filter(function (libroX){
  let catX = libroX.categoria;
  return catX === categoria;
  
  });

  //Ordenos los Libros filtrados por categoria
  let ordenados = destacados.sort((a,b)=>{
    if(a.votos<b.votos) return -1;
    if(a.votos>b.votos) return 1;
    return 0;
    });
    destacados.reverse();


    for (let index = 0; index < 3 ; index++) {
      const elemento = ordenados[index];
      let libro = elemento.titulo
   
      let idLibro = Libros.findIndex(function (libro1) {
        return libro1.titulo === libro
      })
        
    
        let card = document.createElement('div')
        card.innerHTML = `
        <div class="card cardB" >
          <img src="${elemento.imagen}" class="card-img-top" alt="Portada Libro" id="imgAccion1">
          <div class="card-body" >
            <h5 class="card-title" id="tituloAccion1">Título: ${elemento.titulo}</h5>
            <small class="text-muted" id="fechaEstrenoAccion1">Estreno: ${elemento.anio}</small>
            <div><small id="votosAccion1">Votos: ${elemento.votos}</small></div>
            <div><small id="categoriaAccion1">Categoría: ${elemento.categoria}</small></div>
            <p class="card-text" id="descripLibroAccion1">Descripción: ${elemento.contraportada}</p>
          </div>
          <div class="card-footer">
            <div class="userDiv">
              <button>Más info</button>
              <button >Alquilar</button>
              <button class= "fas fa-thumbs-up fa-2x" style="outline:none;" onclick="votar(${idLibro})"></button>

            </div>
          </div>
        </div>`
        let contenedor= document.getElementById(categoria)
        contenedor.appendChild(card);}
  }

  
cargarCards("Accion");
cargarCards("Terror");
cargarCards("Ficcion");





function votar(id) {

 Libros[id].votos ++ == 1
 localStorage.setItem("Libros", JSON.stringify(Libros))
 alert(`Suma un voto al libro: ${Libros[id].titulo}`)
 location.reload()

// document.querySelector("#title_modal").innerText = Libros[id].titulo;

//  $("#heroeModal").modal("show");

}


// function califica(){

// alert("hola")
// // contador = item.id[0]
// // let nombre = item.id.substring(1);
// // for (let i = 0; i < 5; i++) {
// //   if(i < contador)
// //   {
// //     document.getElementById((i+1)+nombre).style.color ="orange";

// //   }
  
// // }
// }


































