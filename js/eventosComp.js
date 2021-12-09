//funcion para agragar elementos al html al DOM/titulo y definicion
function agregarElemento() {
    let hache1 = document.createElement("h1");
    let contenido = document.createTextNode("Eventos:");
    hache1.appendChild(contenido);
    let insertar = document.getElementById("definicion");
    document.body.insertBefore(hache1, insertar).style.color = "white";
    let parrafoPrincipal = document.createElement("definicion");
    parrafoPrincipal.innerHTML = "Los Eventos son la manera que tenemos en Javscript de controlar las acciones de los usuarios y definir un comportamiento. El manejo de Eventos es el caballo de batalla para la interactividad, por que con ellos podemos responder a las distintas acciones";
    document.getElementById("definicion").appendChild(parrafoPrincipal).style.color = "beige"
   
}

document.body.onload = agregarElemento;

//Clase para crear productos
class Productos{
    constructor(nombre,precio, cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}

//array encragado de almacenar mis datos
let producto=[];

//aca pinto en el html
let idForm = document.getElementById("idForm")
let boton1 = document.getElementById("boton1")
let cargaDeProducto= document.getElementById("cargaDeProductos")

//optengo los datos del formulario
idForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let cantidad= document.getElementById("cantidad").value;

    const productoForm= new Productos(nombre, precio, cantidad);
    console.log(productoForm);

    producto.push(productoForm);
    localStorage.setItem("productosStor", JSON.stringify(producto))
    idForm.reset();  

})


//pinto los datos optenidos por el formulario
boton1.addEventListener("click", ()=>{
    let prodEnStor= JSON.parse(localStorage.getItem("productosStor"))
    console.log(prodEnStor);
    prodEnStor.forEach((productoArray, indice)=>{
        cargaDeProducto.innerHTML +=
    `<div class = "card" id="produc${indice}" style="width:20rem">
    <div class="card-body">
    <h3 class="card-title">${productoArray.nombre}</h3>
    <p class="card-text">$${productoArray.precio}</p>
    </div>
    </div>  `   
    
    });

})

