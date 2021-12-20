console.log("hola conJquery")

$(function(){
    $("body").css({
        "background-color": "pink",
        "margin":"2rem"

    })
    $("p").css({ 
    "font-size": "1.5rem", "color": "black"})

    $("#uno").click(function(){
        $("p").hide();
    })

    $("#eliminar").css({ 
        "background-color": "red", "color": "white"})
    

    $("#dos").click(function(){
        $("p").show();
    })
    
    $("#tres").dblclick(function(){
        $("#parrafo").hide();
    })
   
    $("#parrafoTres").mouseenter(function(){
        $("#parrafoDos").fadeOut();
    })

    $("#parrafoTres").mouseleave(function(){
        $("#parrafoDos").fadeIn();
    })

    $(".parrafoUno").mouseenter(function(){
        $(".parrafoDos").slideDown();
    })

    $(".parrafoUno").mouseleave(function(){
        $(".parrafoDos").slideUp();
    })

    $("p").animate({
        width:"400px"
    }, 2000)


    $(".parrafoUno").after("<p>Parrafo agregado con JQuery...<strong>Incorporando Etiquetas</strong></p>")
    
    $("#eliminar").click(function(){
        $("html").remove();
    })


});



