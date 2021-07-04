//Cargo la clave Libros del Storage con el array Libros
// let Libros = [];
// localStorage.setItem("Libros", JSON.stringify(Libros));



// let libros=[
//   {id:idGenerator(),categoria:"Drama",votos:"30",titulo:"Querida Amy",Imagen:"https://i.ebayimg.com/images/g/xFkAAOSwol5Yv3sJ/s-l400.jpg",contraportada:"Una alumna de Margot Lewis (una profesora que escribe en un periódico local) desaparece inesperadamente. Un día después de la desaparición, Margot recibe una de sus cartas pidiendo ayuda; sin embargo, la carta no es de su estudiante, sino de una niña que desapareció dos décadas atrás.",autor:"Hellen Callaghan",editorial:"Austral",anio:"2017"},
//   {id:idGenerator(),categoria:"Drama",votos:"20",titulo:"Romeo y Julieta",Imagen:"https://images.cdn2.buscalibre.com/fit-in/360x360/27/e9/27e92f0d8b351aef49730410ab4da17d.jpg",contraportada:"El relato se inicia,  del amor prohibido entre dos jóvenes Romeo Montesco y Julieta Capuleto, pertenecientes a dos familias contrincantes de la ciudad de Verona, en Italia, durante la época del renacimiento.",autor:"William Shakespeare",editorial:"Atlántida",anio:"1597"},
//   {id:idGenerator(),categoria:"Drama",votos:"11",titulo:"La casa de Bernarda Alba",Imagen:"http://3.bp.blogspot.com/-ejuy6-EDoKs/VWiOZhQJ_EI/AAAAAAAAAog/CidveuAGaas/s1600/casaBernardaAlba.jpg",contraportada:"Se trata del enfrentamiento entre la libertad y la autoridad, una dualidad que podemos ver claramente reflejadas en los personajes de la obra: Bernarda representa la autoridad y sus hijas el deseo y las ansias de liberta",autor:"Federico García Lorca",editorial:"Austral",anio:"1936"},
//   {id:idGenerator(),categoria:"Drama",votos:"40",titulo:"La Divina Comedia",Imagen:"https://mlstaticquic-a.akamaihd.net/libro-la-divina-comedia-dante-alighieri-D_NQ_NP_782658-MLU32020276950_082019-F.jpg",contraportada:"La Divina Comedia relata el viaje de Dante por el Infierno, el Purgatorio y el Paraíso, guiado por el poeta romano Virgilio. El poema comienza con el encuentro de Virgilio con Dante, que se ha perdido en una selva y tropieza con bestias salvajes",autor:"Dante Alighieri",editorial:"Cátedra",anio:"2009"},
//   {id:idGenerator(),categoria:"Drama",votos:"50",titulo:"Memorias de una Geisha ",Imagen:"https://i.pinimg.com/564x/43/c0/61/43c0611510a508aeb7dc995fabed2cb4.jpg",contraportada:"Ayuri es una chica dentro de un mundo donde las jóvenes son adiestradas en el arte de la seducción y donde las convencen que, para ellas, el amor no es más que un espejismo.",autor:"Arthur Golden",editorial:"Alfred A. Knopf",anio:"1997"},
//   {id:idGenerator(),categoria:"Terror",votos:"60",titulo:"La Tienda",Imagen:"http://multimedia.fnac.com/multimedia/ES/images_produits/ES/ZoomPE/6/4/7/9788483468746.jpg",contraportada:"Una presencia maligna pretende sembrar el caos en todo el pueblo de Castle Rock.",autor:"Stephen King",editorial:"Fontana",anio:"2009"},
//   {id:idGenerator(),categoria:"Terror",votos:"70",titulo:"Frankenstein",Imagen:"https://tienda.sophosenlinea.com/imagenes_grandes/9781435/978143515962.GIF",contraportada:"Frankenstein o el moderno Prometeo es un auténtico clásico de la literatura por méritos propios. Por la originalidad de su propuesta, por tratar temas capitales como el progreso, la ética o la aceptación de uno mismo, el bien y el mal, los prejuicios, la venganza… Una novela redonda a la que acudir de tanto en tanto.",autor:"Mary Shelley",editorial:"Panamericana",anio:"1931"},
//   {id:idGenerator(),categoria:"Terror",votos:"80",titulo:"Drácula",Imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/76/dc/76dc4380329a0f6f3d38ae712e5407ac.jpg",contraportada:"Demuestra que la historia del Príncipe de la Noche trasciende los géneros para crear una obra especial, entre el horror, la ciencia ficción, el romance, la antropología y la condición humana.",autor:"Bram Stoker",editorial:"Fontana",anio:"1897"},
//   {id:idGenerator(),categoria:"Terror",votos:"10",titulo:"El buen hijo",Imagen:"https://librospdfgratismundo.com/wp-content/uploads/2019/10/el-buen-hijo.png",contraportada:"Una novela demencial, inquietante y adictiva. Gore, original e imprevisible. You-jeong Jeong toma una premisa familiar –un protagonista que pierde la memoria justo cuando descubre un asesinato– y la convierte en algo totalmente personal. ",autor:"You-Jeong",editorial:"Panamericana",anio:"2019"},
//   {id:idGenerator(),categoria:"Terror",votos:"14",titulo:"Kaiki. Cuentos de terror y locura",Imagen:"https://www.libcientifica.com/imagenes/9788494/978849461604.GIF",contraportada:"Una recopilación de 15 relatos japoneses de principios del siglo XX de Kaiki, un género literario muy sutil que se basa más en angustiar y crear desasosiego que en producir terror.",autor:"VV. AA.",editorial:"Fontana",anio:"2017"},
//   {id:idGenerator(),categoria:"Ficción",votos:"110",titulo:"La máquina del tiempo",Imagen:"https://mlstaticquic-a.akamaihd.net/libro-la-maquina-del-tiempo-herbert-george-wells-D_NQ_NP_600725-MLU25474769702_032017-F.jpg",contraportada:"La aventura de exploración futura y el adoctrinamiento de sus lectores. El retrato de una sociedad futura dividida entre gente hipersensible y mostrencos monstruosos es fascinante, y términos como 'Morlock' han pasado al acervo popular.",autor:"Herbert George Wells",editorial:"Roca",anio:"1895"},
//   {id:idGenerator(),categoria:"Ficción",votos:"120",titulo:"Asesino de Brujas",Imagen:"https://1.bp.blogspot.com/-DabG18FiSrs/XmYcEznIOqI/AAAAAAAABdc/FisQunFQ0H8bQwKDajTE7a0V5EufYQcPQCNcBGAsYHQ/s320/51BiKFWzwmL.jpg",contraportada:"Un debut brillante; lleno de todo lo que me gusta: una heroína vibrante y completamente realizada; un sistema de magia intrincado y letal y un romance ardiente que me mantuvo en vilo toda la noche. Asesino de brujas: la bruja blanca es sin duda una joya. ¿Sarah J. Maas; autora de la saga Una corte de espinas y rosas; best seller del New York Times.",autor:"Maurhin, Shelby",editorial:"Austral",anio:"2021"},
//   {id:idGenerator(),categoria:"Ficción",votos:"100",titulo:"Arsene Lupin",Imagen:"https://images.cdn2.buscalibre.com/fit-in/360x360/96/b9/96b9d711019a6807e4a89495b7089b97.jpg",contraportada:"Una nueva edicion del libro que recoge los nueve primeros relatos del carismatico ladron de guante blanco. Tan popular y emblematico como Sherlock Holmes o acaso mas; Arsene Lupin es un personaje inolvidable convertido ya en leyenda. Experto en derecho y medicina; diestro en artes marciales; ademas de prestidigitador y autentico seductor. Lupin es un heroe de los bajos fondos a quien nadie gana en sagacidad. ",autor:"Leblanc, Maurice",editorial:"Roca",anio:"2021"},
//   {id:idGenerator(),categoria:"Ficción",votos:"140",titulo:"Un cuento Perfecto",Imagen:"https://comicstores.es/imagenes_grandes/9788491/978849129191.JPG",contraportada:"Érase una vez una mujer que lo tenía todo y un chico que no tenía nada. - Érase una vez una historia de amor entre el éxito y la duda. - Érase una vez un cuento perfecto. Elísabet Benavent; @BetaCoqueta; regresa al panorama de la literatura con una novela que explora el significado del éxito en la vida y reflexiona con ironía y humor acerca de las imposiciones sociales; la presión del grupo y la autoexigencia que; aunque cueste creerlo; no es sinónimo de felicidad.",autor:"Benevant, Elizabet",editorial:"Global",anio:"2016"},
//   {id:idGenerator(),categoria:"Ficción",votos:"150",titulo:"Lo mucho que te ame",Imagen:"https://www.libreriaespanola.com/website/image/product.image/3971/image",contraportada:"Creo que si alguien supiese la historia de mi vida la vería como una vida mal vivida; llena de secretos; traiciones; ocultamientos. Pero en esta historia en la que casi todo lo que hago lo hago mal; me permito creer que hay una cosa; una sola cosa; que hago bien.",autor:"Sacheri, Eduardo",editorial:"Alfaguara",anio:"2019"},
//   {id:idGenerator(),categoria:"Fantasía",votos:"160",titulo:"Las mil y una noches",Imagen:"https://imagessl6.casadellibro.com/a/l/t0/26/9789588296326.jpg",contraportada:"El comienzo es uno de los más atrapantes: Scheherazade, la hija del visir, se casará y luego será asesinada por el rey; se anticipa a este destino convenciendo al rey de que escuche una historia, que luego alarga durante 1001 noches al terminar cada noche en un suspenso.",autor:"Anonimo",editorial:"Global",anio:"1987"},
//   {id:idGenerator(),categoria:"Fantasía",votos:"170",titulo:"Alicia en el país de las maravillas",Imagen:"https://i.pinimg.com/736x/a5/c4/19/a5c41967316941096fc621f57d017c52.jpg",contraportada:"En la historia, una niña curiosa cae por la madriguera de un conejo en un mundo mágico, tentador y aterrador poblado por animales antropomórficos y debe enfrentar la tiranía de una reina.",autor:"Lewis Carroll",editorial:"Fontana",anio:"1865"},
//   {id:idGenerator(),categoria:"Fantasía",votos:"180",titulo:"Mary Poppins ",Imagen:"https://imagessl3.casadellibro.com/a/l/t5/53/9780007398553.jpg",contraportada:"Pero aún el cuento clásico de Travers contiene uno de los protagonistas más intrigantes de la historia de la literatura infantil: la peculiar y mágica niñera Mary Poppins”",autor:"P.L. Travers",editorial:"Alfaguara",anio:"1964"},
//   {id:idGenerator(),categoria:"Fantasía",votos:"190",titulo:"El león, la bruja y el ropero ",Imagen:"https://portalibros.info/wp-content/uploads/2019/11/las-cronicas-de-narnia-el-leon-la-bruja-y-el-ropero.jpg",contraportada:"En el relato, un grupo de niños tropieza con una puerta que conduce a un mundo secreto detrás del más prosaico de los muebles, un armario. El momento para la aventura es ideal, aunque no el mejor, ya que se encuentran en una casa solitaria en un momento desolador, separados de su familia y amigos.",autor:"C.S. Lewis",editorial:"Genesis",anio:"1950"},
//   {id:idGenerator(),categoria:"Fantasía",votos:"200",titulo:"El mago de Oz",Imagen:"http://4.bp.blogspot.com/-JCdCMFmdJsE/Vle4aOEaRTI/AAAAAAAACSQ/WwZN4vFFEpo/s1600/el-maravilloso-mago-de-oz.jpg",contraportada:"En las grises praderas de Kansas un potente ciclón arrastra la casa de Dorothy hasta el misterioso País de Oz; un mundo fantástico poblado por los Winkies; los Munchkins; los monos voladores o las brujas. A través del viaje como símbolo; metáfora de la vida; Baum crea una obra asombrosa; una fábula moderna que nos lleva a un lugar de ensueño en el que nosotros también participamos en un viaje inolvidable.",autor:"Baum Lyman Frank",editorial:"Atlas",anio:"2019"},
//   {id:idGenerator(),categoria:"Novela",votos:"210",titulo:"Orgullo y Prejuicio",Imagen:"https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png",contraportada:"Orgullo y prejuicio es una obra maestra de lo que hoy entendemos como ?novela romática? y se pueden vislumbrar en sus páginas situaciones; personajes y hechos que ya se han conocido a través del cine y la televisión; pues de esta gran historia derivan; con mayor o menor fortuna; muchos de los guiones y libretos que dieron cuerpo a innumerables y populares filmes y programas. Este es también el origen; indudablemente de una muy alta calidad; de muchas secuencias y escenas del teatro y el teleteatro. Sin embargo; en la obra de Jane Austen; gracias a su talento; podemos asistir a una comprensión mucho más honda y desarrollada de la naturaleza humana; envuelta en un conflicto que es eterno y en una circunstancia que nos prueba a todos.",autor:"Austen Jane",editorial:"Roca",anio:"2015"},
//   {id:idGenerator(),categoria:"Novela",votos:"220",titulo:"El principito",Imagen:"https://20palabras.com/wp-content/uploads/2016/12/principito.jpg",contraportada:" Trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.",autor:"Antoine de Saint-Exupéry",editorial:"Atlas",anio:"2016"},
//   {id:idGenerator(),categoria:"Novela",votos:"230",titulo:"Largo Petalo de mar",Imagen:"https://i.pinimg.com/originals/e4/5c/c7/e45cc7ddd569dc6fc161d3eb4417dd27.jpg",contraportada:"Un viaje a través de la historia del siglo XX de la mano de unos personajes inolvidables» Diario de Navarra «La novela Largo pétalo de mar; de Isabel Allende; ha sido el libro más popular del último año.» La Vanguardia «Largo pétalo de mar [...] está llamada al éxito inmediato como sus predecesoras.",autor:"Allende Isabel",editorial:"Alfaguara",anio:"2021"},
//   {id:idGenerator(),categoria:"Novela",votos:"240",titulo:"Cronica de una muerte anunciada",Imagen:"http://4.bp.blogspot.com/_JX0mJgkbNS0/THgN3lW3W8I/AAAAAAAAAAc/A-HjrEokOOg/s1600/cronica+de+una+muerte+anunciada.jpg",contraportada:"El tiempo cíclico; tan utilizado por García Márquez en sus obras; reaparece aquí minuciosamente descompuesto en cada uno de sus momentos; reconstruido prolija y exactamente por el narrador; que va dando cuenta de lo que sucedió mucho tiempo atrás; que avanza y retrocede en su relato y hasta llega mucho tiempo después para contar el destino de los supervivientes. ",autor:"Garcia Marquez Gabriel",editorial:"Genesis",anio:"2003"},
//   {id:idGenerator(),categoria:"Novela",votos:"250",titulo:"Memoria de mis putas tristes",Imagen:"http://4.bp.blogspot.com/-TgxlksO0shk/Td6cpsMJltI/AAAAAAAAKRQ/8jIEDqBUAZ4/s1600/memoria-de-mis-putas-tristes.jpg",contraportada:"El año de mis noventa años quise regalarme una noche de amor loco con una adolescente virgen. Me acordé de Rosa Cabarcas; la dueña de una casa clandestina que solía avisar a sus buenos clientes cuando tenía una novedad disponible. Nunca sucumbí a ésa ni a ninguna de sus muchas tentaciones obscenas; pero ella no creía en la pureza de mis principios. También la moral es un asunto de tiempo; decía; con una sonrisa maligna; ya lo verás.",autor:"Garcia Marquez Gabriel",editorial:"Fontana",anio:"2004"},
  
  
  


//    ];



// localStorage.setItem("libros", JSON.stringify(libros));

//Traigo a Libros los datos de la clave Libros sino hay, lo inicializo en vacio
let libros = JSON.parse(localStorage.getItem("libros")) || [];


//Funcion cargarCards filtra, ordena y reenderiza las crds de acuerdo a la categoría

function cargarCards(categoria)
{

   //Filtro libros segun la categoria
  let destacados= libros.filter(function (libroX){
    let catX = libroX.categoria;
    return catX === categoria;
  
    });

  //Ordenos los Libros filtrados por categoria
  let ordenados = destacados.sort((a,b)=>{
    if(a.votos<b.votos) return -1;
    if(a.votos>b.votos) return 1;
    return 0;
    });
    ordenados.reverse();
    
    
    for (let index = 0; index < 3 ; index++)
    {
      const elemento = ordenados[index];
      let libro = elemento.titulo
   
      let idLibro = libros.findIndex(function (libro1) {
        return libro1.titulo === libro
      })
      let card = document.createElement('div')
      card.classList.add("Libro", "col-md-4")
      card.innerHTML =`
      
            <div class="libro-img" style="background-image: url(${elemento.Imagen});"></div>
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
                    <li><i class="material-icons fas fa-info fa-1x" style="outline:none; cursor:pointer;" onclick="votar(${idLibro})"></i></li>
                  </ul>
                </div>
              </div>
              <div class="mr-grid">
                <div class="col1">
                  <p class="libro-description">${elemento.contraportada}</p>
                </div>
              </div>
            </div>` 
      

        let contenedor= document.getElementById(categoria);

        contenedor.appendChild(card);

    }
         
}

cargarCards("Terror");
cargarCards("Drama");
cargarCards("Ficción");


function votar(id) {

 libros[id].votos ++ == 1
 localStorage.setItem("libros", JSON.stringify(libros))
 location.reload()
}

function idGenerator(){
  return Math.random().toString(36).substr(2,9).toUpperCase()
}


































