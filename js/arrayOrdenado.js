class Pizzas {
    constructor(gusto, precio){
      this.gusto = gusto;
      this.precio = precio;
    }
    
  }
  
  
  let arrayPizzas = [];
  function tomarDatos(cantidad){
     
   for (let i = 0; i < cantidad; i++) {
    let gustoPizza = prompt("Ingrese Gusto");
    let pricePizza = parseFloat(prompt("Ingrese Precio"));
     let pizza = new Pizzas(gustoPizza, pricePizza);
      arrayPizzas.push(pizza);
   }
  
    return arrayPizzas
  }
  
  
  let arregloPizzas = tomarDatos(parseInt(prompt("Ingrese la Cantidad de Pizzas")));
  
  
  function ordenarPrecio(metodoOrdenar,arrayPizzas){
    let arrayOrdenado = [];
    if (metodoOrdenar == 1) {
      arrayOrdenado = [...arrayPizzas.sort(function(a, b){
        return a.precio - b.precio;
      })];
    }else{
      arrayOrdenado = [...arrayPizzas.sort(function(a, b){
        return b.precio - a.precio;
      })];
    }
    return arrayOrdenado;
      
  
  }
  
  const arregloUno = ordenarPrecio(1,arregloPizzas);
  const arregloDos = ordenarPrecio(0,arregloPizzas); 
  console.log(arregloUno);
  console.log(arregloDos);
 

  function imprimirPizzas(){
    for (let i = 0; i < arrayPizzas.length; i++) {
      document.write("imprime: "+ arrayPizzas[i].gusto + " su precio es: $" +arrayPizzas[i].precio + "<br>");
    }
  }

  imprimirPizzas();
 