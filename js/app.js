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

//let contenido = [];

function cargarCards(categoria)
{

  //let contenido = [];
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
    
    
    for (let index = 0; index < 3 ; index++)
    {
      const elemento = ordenados[index];
      let libro = elemento.titulo
   
      let idLibro = Libros.findIndex(function (libro1) {
        return libro1.titulo === libro
      })
      let card = document.createElement('div')
      card.classList.add("Libro", "col-md-3")
      card.innerHTML =`
      
            <div class="libro-img" style="background-image: url(http://4.bp.blogspot.com/_JX0mJgkbNS0/THgN3lW3W8I/AAAAAAAAAAc/A-HjrEokOOg/s1600/cronica+de+una+muerte+anunciada.jpg);"></div>
              <div class="text-libro-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>${elemento.titulo}</h1>
                    <ul class="libro-gen">
                      <li>Autor: ${elemento.autor} /</li>
                      <li>Categoría: ${elemento.categoria}</li>
                    </ul>
                </div>
              </div>
              <div class="mr-grid summary-row">
                <div class="col2">
                  <h5>Descripción:</h5>
                </div>
                <div class="col2">
                  <ul class="libro-likes">
                    <li><i class="material-icons"></i>${elemento.votos}</li>
                    <li><i class="material-icons fas fa-thumbs-up fa-1x" style="outline:none; cursor:pointer;" onclick="votar(${idLibro})"></i></li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="libro-description">${elemento.contraportada}</p>
                </div>
              </div>
            </div>` 
      
      //contenido.push(card);

      
     
        //let contenedor= document.getElementById('main');
        //contenedor.appendChild(card);
        //contenedor.innerHTML = card
        //contenedor.appendChild(card);
        let contenedor= document.getElementById(categoria);
        //let estructura = contenido[0].concat(contenido[1], contenido[2]);
        // contenido.forEach(element => {
        //   contenedor.appendChild(element);
        contenedor.appendChild(card);


    }


      




 
          
}
      
 
        
      //  contenedor.innerHTML = estructura;
      //  //contenedor.innerHTML = card + card + card;
      
      


      
  

  
cargarCards("Accion");
cargarCards("Terror");
cargarCards("Ficcion");


function votar(id) {

 Libros[id].votos ++ == 1
 localStorage.setItem("Libros", JSON.stringify(Libros))
 //alert(`Suma un voto al libro: ${Libros[id].titulo}`)
 location.reload()
}

// function agregarITEM(card) {
//   let contenedor= document.getElementById('main');

  
// }


































