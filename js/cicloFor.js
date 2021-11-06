/*simulador de control de mesas de un bar*/


let cantidadDeMesas = 10;
let MesasOcupadas = 0;
let mesaReservada = 0;

let MesasRestantes = 0;

for (let i = 1; i <= cantidadDeMesas; i++) {
    let mesa = prompt(" la mesa " + i + " en que condición se encuentra? \n (coloque -ocupada-, -reservada- o cualquier otra entrada)").toLowerCase();
    if (mesa === "ocupada") {
        MesasOcupadas++;

    } else if (mesa === "reservada") {
        mesaReservada++;
    } else {
        MesasRestantes++;
    }
}
document.write("Estan ocupadas la cantidad de mesas: " + MesasOcupadas + ("<br>"));
document.write("Estan reservadas la cantidad de mesas " + mesaReservada + ("<br>"));
document.write(" estan libres la cantidad de mesas: " + MesasRestantes);

console.log("Estan ocupadas la cantidad de mesas: " + MesasOcupadas + ("<br>"));
console.log("Estan reservadas la cantidad de mesas " + mesaReservada + ("<br>"));
console.log("estan libres la cantidad de mesas: " + MesasRestantes);