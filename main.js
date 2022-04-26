const URLJSON = "https://pokeapi.co/api/v2/pokemon/"

$("section").prepend('<button id="btn1">MOSTRAR PERSONAJES</button>');
let botonApi = document.getElementById("btn1");

$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("section").append(`<div class="div1 col-lg-4 col-md-6 col-sm-12 ">
                                
                                <div class="div2">  
                                <h3 class="text-white text-center w-100">${dato.name}</h3> 
                                <div class="div3">  
                                    <img src="${dato.image}" alt="">
                                </div>    
                                </div>    
                            </div>`)
      }
      // crear boton para mostrar/ocultar personajes
      $("body").prepend('<button id="btn" onclick="mostrarOcultar()">MOSTRAR / OCULTAR</button>');
      // eliminar boton de peticion
      botonApi.parentNode.removeChild(botonApi);  
    }
    });
});
    
    function mostrarOcultar(){
        $("#section").toggle("fast");
    }












// nombreUsuario = prompt("ingrese su nombre");
//     profesionUsuario = prompt("ingrese su profesion");
//     $( document ).ready(function() {
//     //Declaramos la url del API
//     const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
//     //Declaramos la información a enviar
    
//     const infoPost =  { nombre: nombreUsuario, profesion: profesionUsuario }
//     //Agregamos un botón con jQuery
//     $("body").prepend('<button id="btn1">ENVIAR DATOS</button>');
//     //Escuchamos el evento click del botón agregado
//     $("#btn1").click(() => { 
//         $.ajax({
//             method: "POST",
//             url:  APIURL,
//             data: infoPost,
//             success: function(respuesta){
//                 $("body").prepend(`<div class="text-light">Nombre: ${respuesta.profesion}</div>`);
//                 $("body").prepend(`<div class="text-light">Profesion: ${respuesta.nombre}</div>`);
//             }
//         });
//     });
// });
