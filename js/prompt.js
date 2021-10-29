let nombreUsuario;
let nacimiento;
let edad;
let numeroEdad;



nombreUsuario = prompt("ingrese su nombre de usuario");
console.log("hola " + nombreUsuario);

nacimiento = prompt("ingrese su fecha de nacimiento");
console.log("tu fecha de nacimiento es : " + nacimiento);


edad = parseInt(prompt("ingrese su edad"));
console.log("su edad es: " + edad);

numeroEdad = parseInt(prompt("ingrese los años a sumar: "));
console.log("quiere sumar " + numeroEdad + " a su edad");

let numeroEnaños = edad + numeroEdad;
document.write("Hola " + nombreUsuario + ", tu fecha de nacimiento es " + nacimiento + " y tu edad en " + numeroEdad + " años sera: " + numeroEnaños);
console.log("su edad en 20 años sera: " + numeroEnaños);