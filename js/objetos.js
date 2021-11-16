/*Simulador de compras al contado o con tarjeta */



class CalculadoraDeCostoPizza {
    constructor() {
        this.pizzas = {
            muzzarella: {
                precio: 500
            },
            napolitana: {
                precio: 550
            }
        }
    }

    agregarPizza() {
        let i = 0;
        while (i === 0) {
            let variedadDePizza = parseInt(prompt("¿Que variedad de pizza deseas?: \n Colocar 1 para muzarella y 2 para napolitana."));
            if (variedadDePizza === 1) {
                i = variedadDePizza;
            } else if (variedadDePizza === 2) {
                i = variedadDePizza;
            }
        }

        if (i === 1) {
            this.cobrar("muzzarella");
        } else {
            this.cobrar("napolitana");
        }
    }

    cobrar(tipoDePizza) {
        let i = 0;
        while (i === 0) {
            let pago = parseInt(prompt("¿Como desea abonar?: \n Colocar 1 para contado y 2 para credito."));
            if (pago === 1) {
                i = pago;
            } else if (pago === 2) {
                i = pago;
            }
        }
        this.calcular(tipoDePizza, i)
    }

    calcular(tipoDePizza, tipoPago) {
        console.log(tipoDePizza, tipoPago);
        let precioAPagar;
        if (tipoPago === 1) {
            precioAPagar = this.pizzas[tipoDePizza].precio
        } else {
            console.log(this.pizzas[tipoDePizza])
            precioAPagar = (this.pizzas[tipoDePizza].precio * 1.1);
        }
        document.write("Su monto a pagar es: $" + parseFloat(precioAPagar).toFixed(2));
    }
}

const newCalculadoraDePizza = new CalculadoraDeCostoPizza();
newCalculadoraDePizza.agregarPizza();