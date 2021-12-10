$(function(){
    console.log("hola");
})

$(()=>{
 console.log("hola con funcion flecha")
})

$(()=>{
    console.log($("nav"));
    console.log($("a"));
    console.log($(".navbar-brand"));
    console.log($("img"));
    console.log($("h1"))

    $(".definicion").append("<p>JQuery es una librería de JavaScript. Esta librería de código abierto, simplifica la tarea de programar en JavaScript y permite agregar interactividad a un sitio web sin tener conocimientos del lenguaje.</p>, <p>Otro Parrafo...</p>");
    
})




