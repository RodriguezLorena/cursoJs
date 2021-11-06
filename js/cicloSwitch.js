/*simulador de pedidos de pizza */


let pizza=prompt("ingresa la pizza que desees: \n Muzzarella \n Napolitana \n Jamon \n Viena \n Calabresa \n Rucula \n Tropical \n Primavera").toLowerCase();
let precio1= 600;
let precio2= 650;
let precio3= 700;
let precio4= 750;
let precio5= 800;
let precio6= 850;
let precio7= 900;
let precio8= 950;




switch(pizza){
    case "muzzarella":
        document.write("Seleccionaste " + pizza + " su valor es: " + precio1);
        break;
    case "napolitana":
        document.write("Seleccionaste " + pizza + " su valor es: " + precio2);
        break; 
    case "jamon":
        document.write("Seleccionaste " + pizza + " su valor es: $" + precio3);
        break;       
    case "viena":
        document.write("Seleccionaste " + pizza + " su valor es: $" + precio4);
        break; 
    case "calabresa":
        document.write("Seleccionaste " + pizza + " su valor es: $" +  precio5);
        break; 
    case "rucula":
        document.write("Seleccionaste " + pizza +   " su valor es: $" + precio6);
        break; 
    case "tropical":
        document.write("Seleccionaste " + pizza + " su valor es: $" + precio7);
        break;
    case "primavera":
        document.write("Seleccionaste " + pizza + " su valor es: $" + precio8);
        break;
    default: 
        document.write("Lo sentimos en estos momentos no tenemos " + pizza);
      
 }