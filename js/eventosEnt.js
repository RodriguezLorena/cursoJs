
//este es mi array de productos
let cargaProductos = [
    {id: 1, nombre: "Muzzarella", precio: 600, variedad: "Pizzas", img: "../img/pizza.jpg", cantidad:1,},
    {id: 2, nombre: "Completa", precio: 650, variedad: "Hamburguesas", img:"../img/hamburguesa.jpg", cantidad:1},
    {id: 3, nombre: "Grande",   precio: 700, variedad: "Picadas", img:"../img/picadas.jpg", cantidad:1}]



    const carritoAbrir = document.getElementById("boton-carrito");
    const carritoCerrar = document.getElementById("carritoCerrar");
    
    const contenedorModal = document.getElementsByClassName("modal-contenedor")[0]
    const modalCarrito = document.getElementsByClassName("modal-carrito")[0]
    
    carritoAbrir.addEventListener("click", ()=> {
        contenedorModal.classList.toggle("modal-active")
    })
    carritoCerrar.addEventListener("click", ()=> {
        contenedorModal.classList.toggle("modal-active")
    })
    modalCarrito.addEventListener("click",(e)=>{
        e.stopPropagation()
    })
    contenedorModal.addEventListener("click", ()=>{
        carritoCerrar.click()
    })



//los productos que seleciona el usuario se guardan es el array carritoDeCompra
    let carritoDeCompras = []

    const contenedorProductos = document.getElementById("contenedor-productos");
    const contenedorCarrito = document.getElementById("carrito-contenedor");
    
    const contadorCarrito = document.getElementById("contadorCarrito");
    const precioTotal = document.getElementById("precioTotal");
    
    const selecVariedad = document.getElementById("selecVariedad")
    
    selecVariedad.addEventListener("change",()=>{
        console.log(selecVariedad.value)
        if(selecVariedad.value == "all"){
            mostrarProductos(cargaProductos)
        }else{
            mostrarProductos(cargaProductos.filter(elemento => elemento.variedad == selecVariedad.value))
        }
    })  
    mostrarProductos(cargaProductos)
    
    function mostrarProductos(array){
        contenedorProductos.innerHTML= ""
        array.forEach(producto => {
            let div = document.createElement("div")
            div.classList.add("producto")
            div.innerHTML += 
            `<div class="card">
            <div class="card-image">
            <img src=${producto.img}>
            <span class="card-title">${producto.nombre}</span>
            <a id="boton${producto.id}" class="btn-floating halfway-fab waves-effect waves-light black"><i class="fas fa-cart-arrow-down"></i></a>
            </div>
            <div class="card-content">
            <p>Tipo: ${producto.variedad}</p>
            <p> $${producto.precio}</p>
            </div>
            </div>`
            contenedorProductos.appendChild(div)
    
            let boton = document.getElementById(`boton${producto.id}`)
    
            boton.addEventListener("click", ()=>{
                agregarAlCarrito(`${producto.id}`);
               
            })
        });   
    }
    
    //agrego los productos y los pinto por DOM
    
    function agregarAlCarrito(id) {
        let repetido = carritoDeCompras.find(elemento => elemento.id == id)
        if(repetido){
            repetido.cantidad = repetido.cantidad + 1
            document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</p>`
            console.log(repetido);
            actualizarCarrito()
        }else{
            let productoAgregar = cargaProductos.find(elemento => elemento.id == id)
    
            carritoDeCompras.push(productoAgregar)
            localStorage.setItem("keyProductos", JSON.stringify (carritoDeCompras))
            actualizarCarrito()
    
            let div = document.createElement("div")
            div.classList.add("productoEnCarrito")
            div.innerHTML = `<p>${productoAgregar.nombre}</p>
                            <p>Precio:$${productoAgregar.precio}</p>
                            <p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>
                            <button class="boton-eliminar" id="eliminar${productoAgregar.id}"><i class="fas fa-trash"></i></button>`
            contenedorCarrito.appendChild(div)
    
            let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    
            botonEliminar.addEventListener("click", ()=>{
                if(productoAgregar.cantidad == 1){
                  botonEliminar.parentElement.remove()
                carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)
                localStorage.setItem("keyProductosElim", JSON.stringify (carritoDeCompras))
                //todavia tengo dificultad con el storage. tengo que eliminar los poductos a medida que el usuario elimina
            
                }else{
                    productoAgregar.cantidad = productoAgregar.cantidad - 1
                    document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`     
                } 
                actualizarCarrito()
            })
        }          
    }
    
    
    function  actualizarCarrito (){
        contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad, 0)
        precioTotal.innerText = carritoDeCompras.reduce((acc , el)=> acc + (el.precio * el.cantidad), 0)
    }
    
    
    
    