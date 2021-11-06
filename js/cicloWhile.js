/*simulador de voto electronico */


const cantidadDeVotantes = parseInt(prompt("Ingrese la cantidad de votantes"));
let candidatoUno = 0;
let candidatoDos = 0;
let candidatoTres = 0;
let votoEnBlanco = 0;
while (candidatoUno + candidatoDos + candidatoTres + votoEnBlanco < cantidadDeVotantes) {
    let voto = prompt("Si vota por el candidato 1, coloque C1 \n Si vota por el candidato 2, coloque C2  \n Si vota por el candidato 3, coloque C3 ");
    voto = voto.toUpperCase();
    if (voto === "C1") {
        candidatoUno++;
    } else if (voto === "C2") {
        candidatoDos++;
    } else if (voto === "C3") {
        candidatoTres++;
    } else {
        votoEnBlanco++

    }

}
document.write("en su mesa han votado " + cantidadDeVotantes + ("<br>"));
document.write("el candidato N° 1, obtuvo un total de " + candidatoUno + ("<br>"));
document.write("el candidato N° 2, obtuvo un total de " + candidatoDos + ("<br>"));
document.write("el candidato N° 3, obtuvo un total de " + candidatoTres + ("<br>"));
document.write("han votado en blanco " + votoEnBlanco + " electores");