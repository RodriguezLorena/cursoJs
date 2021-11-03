/*Simulacion de consuta mesa electoral, segun rango de edad*/

let edadElector = parseInt(prompt("Ingrese su edad"));
if (edadElector >= 0 && edadElector <= 16) {
    document.write("Lo sentimos usted tiene la edad de " + edadElector + " años. Aun no ingresa al padron");
    console.log("aun no ingresa al padron");


} else if (edadElector >= 16 && edadElector <= 65) {

    document.write("usted tiene la edad de " + edadElector + " años. Vota en la mesa xxx");
    console.log("Esta habilitado para votar");

} else if (edadElector >= 66 && edadElector <= 130) {
    document.write("Usted tiene la edad de " + edadElector + " años. Se encuentra registrado. Vota en la mesa xxx. No esta obligado a votar");
    console.log("No es necesario que relice el sufragio.");
} else {
    document.write("lo sentimos usted ingreso " + edadElector + " no es una edad registrada.");
    console.log("Su edad no esta registrada");

};