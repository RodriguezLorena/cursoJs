//simulador: retornar producto seleccionado

class pizzas{
    constructor(gusto, precio){
        this.gusto = gusto;
        this.precio = precio;
    }
}

const muzzarella={gusto: "muzzarella", precio: 500};

const arrayPizza=[muzzarella, {gusto:"napolitana", precio: 550}, {gusto:"jamon",precio:600}, {gusto:"rucula", precio:800}]

const viena= {gusto: "viena", precio:680};

const tropical= {gusto: "tropical", precio: 850};

arrayPizza.push(viena, tropical);

console.log(arrayPizza);


for(const productos of arrayPizza){

    console.log(productos.precio);
    document.write(productos.precio);
    console.log(productos.gusto)
    document.write(productos.gusto);
}

function imprimirPrecioDePizzaQueUsuarioSelecciona(){
//esta armada como funcion por ser acciones conjuntas y creo que es una mejor manera de ubicarla en el codigo, si el codigo fuera mas largo
    const pregunta= prompt("que pizza desea? \n muzzarella \n viena \n napolitana \n jamon \n rucula \n tropical");

    const muzza = arrayPizza.find(productPizza => productPizza.gusto === pregunta);

    document.write(("<br>")+"el precio de la " +  pregunta + " es $" + muzza.precio);
}
imprimirPrecioDePizzaQueUsuarioSelecciona();





 