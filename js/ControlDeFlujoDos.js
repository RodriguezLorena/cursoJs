/*Simulador de biblioteca*/
let contraseñaUsuario = prompt("ingrese su contraseña").toUpperCase();

if (contraseñaUsuario == "BIBLIOTECA") {
    alert("Bienvenido a su Biblioteca");
    document.write("Bienvendio a su biblioteca online ");
    console.log("bienvenido a su biblioteca ");
    let genero = prompt("Ingrese el genero").toLowerCase();

    if ((genero === "terror") || (genero === "accion")) {

        alert("si es mayor de 18 años, dirijase a la seccion adultos ");
        document.write("Ha ingresado " + genero + " Si usted es mayor de 18 años, dirijase a la seccion de adultos ");
        console.log("dirijase a la seccion de adultos");

    } else if ((genero === "infantil") || (genero === "comedia")) {
        alert("dirijase a la seccion familia");
        document.write("Usted a ingresado el genero " + genero + ". Dirijase a la seccion familia");
        console.log("dirijase a la seccion Familia");

    } else if (genero == " " || genero === "") {
        alert(" se requiere una entrada");
        console.log("ud no ha ingresado nada. Se requiere un genero");
        document.write("Lo sentimos, debe ingresar un genero")

    } else {
        alert("lo sentimos, no tenemos una seccion especial. Dirijase a Atencion al cliente");
        document.write("lo sentimos, no tenemos una seccion especial para " + genero + ". Dirijase a Atencion al cliente");
        console.log("lo sentimos, no tenemos una seccion especial. Dirijase a Atencion al cliente");
    };



} else if ((contraseñaUsuario == "") || (contraseñaUsuario == null)) {
    alert("Usted ha ingresado una contraseña invalida ");
    document.write("Usted a ingresado una contraseña invalida")
} else {
    alert("usuario incorrecto ");
    document.write("Usted ha ingresado un usuario no valido");
    console.log("Usted ingreso " + contraseñaUsuario + " No es una contraseña valida");
};