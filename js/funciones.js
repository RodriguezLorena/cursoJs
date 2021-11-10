/*Practicas simples */

// let nombre= prompt("Ingrese su nombre").toUpperCase();
// let apellido=prompt("ingrese su apellido").toUpperCase();
// let dni=prompt("ingrese su numero de documento");


// function registrarse(nombre, apellido,documento){
//     console.log("Usted a ingresado " + nombre + " " + apellido + ". Numero de identidad: " + documento);
//     document.write("Usted a ingresado " + nombre + " " + apellido + ". Numero de identidad: " + documento);
// }

// registrarse(nombre, apellido, dni);

// let numeroUno=parseInt(prompt("ingrese un numero"));
// let numeroDos=parseInt(prompt("ingrese por cuanto quiere devidir"));


// function dividir(num1, num2){
//     console.log(num1/num2);
//     document.write(num1/num2);
// }

// dividir(numeroUno, numeroDos);


/*Simulador de pagos en cuotas */

let capitalInicial = parseInt(prompt("ingrese el monto a pagar"));
let cantidadDeCuotas = parseInt(prompt("ingrese el numero de cuotas"));
let aumento = 0.1;
let interes = x => x * aumento;

let division = (valor, cuota) => valor / cuota;

let suma = (monto, interes) => monto + (monto * interes);
document.write("Usted a ingresado " + capitalInicial + " y lo va a pagar en " +
    cantidadDeCuotas + " cuotas." + ("<br>") + " Su cuota sin interes es: $" +
    (division(capitalInicial, cantidadDeCuotas)) + " por mes" + ("<br>"));

let totalPorMes = division(suma(capitalInicial, aumento), cantidadDeCuotas);
document.write("Con el interes debe abonar un total de : $" + (totalPorMes) + " en cada cuota");