/*Simulador de compras al contado o con tarjeta */

class Pizza{
    constructor(variedad, precio){
        this.variedad = variedad;
        this.precio = precio;
    }

    agregarInteres(){
        this.precio = this.precio * 1.1;
    }

    obtenerPrecio(){
        return "El precio de la pizza " + this.variedad + " es $" + parseFloat(this.precio).toFixed();

    }

}
    
function agregarPizza() {
    let i = 0;
    while (i === 0) {
        let variedadDePizza = parseInt(prompt("¿Que variedad de pizza deseas?: \n Colocar 1 para muzarella y 2 para napolitana."));
        if (variedadDePizza === 1) {
            i = variedadDePizza;
        } else if (variedadDePizza === 2) {
            i = variedadDePizza;
        }
    }

    let tipoDePago;

    if (i === 1) {
        const muzzarella = new Pizza("muzzarella", 500) 
        tipoDePago = this.eligirPago()
        this.calcular(muzzarella,tipoDePago)
    } else {
        const napolitana = new Pizza("napolitana", 550) 
        tipoDePago = this.eligirPago()
        this.calcular(napolitana,tipoDePago)
    }
}

function eligirPago() {
    let i = 0;
    while (i === 0) {
        let pago = parseInt(prompt("¿Como desea abonar?: \n Colocar 1 para contado y 2 para credito."));
        if (pago === 1) {
            i = pago;
        } else if (pago === 2) {
            i = pago;
        }
    }
    return i;
}

function calcular(pizza, tipoPago) {
    let precioAPagar;
    if (tipoPago === 1) {
        precioAPagar = pizza.obtenerPrecio();
    } else {
        pizza.agregarInteres()
        precioAPagar = pizza.obtenerPrecio();
    }
    document.write(precioAPagar);
}

agregarPizza();

