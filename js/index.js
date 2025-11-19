// requerimientos del boton de busqueda

let buscador = document.querySelector(".buscador");
let boton = document.querySelector(".lupita");
let form = document.querySelector(".busqueda");

boton.addEventListener('click', function (e) {
    e.preventDefault();

    let valor = buscador.value

    if (valor == "") {
        alert("Este campo no puede estar vacío");
    } else if (buscador.value.length < 3) {
        alert("La búsqueda debe tener al menos 3 caracteres");
    } else {
        form.submit();
    }
});


// fetch categorias

let urlCategorias = "https://dummyjson.com/products/category-list";
let lista = document.querySelector(".listaCategorias");

fetch(urlCategorias)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);  //el array de categorias

        let contenido = "";

        for (let i = 0; i < data.length; i++) {

            contenido += `
            <li><a href="./category.html?id=${data[i]}" class="categoria">${data[i]}</a></li>`;


            lista.innerHTML = contenido;
        }
    })
    .catch(function (error) {
        console.log(error)
    })

// seccion 1 

let secUno = document.querySelector(".secUno");
if (secUno) {
    fetch("https://dummyjson.com/products/category/sports-accessories")
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        let productos = data.products;
        let infoSec = "";
        for (let i = 0; i < productos.length; i++) {
            producto = productos[i]
            infoSec += 
            `<article class="articulos">
                <img class="fotos" src="${producto.thumbnail}" alt="${producto.title}"> 
                <h3>${producto.title}</h3>
                <p>${producto.description}</p>
                <p>Precio: $${producto.price}</p>
                <a class="detalles" href="./product.html?id=${producto.id}">VER DETALLES</a> 
            </article> `
        }
        secUno.innerHTML += infoSec
    })
        .catch(function(error){
        console.log('El error es: ' + error);
    })
}


// seccion 2 
let secDos = document.querySelector(".secDos");
if (secDos) {
    fetch("https://dummyjson.com/products/category/kitchen-accessories")
    .then(function(response){
        return response.json();
    })
        .then(function(data){
        let productos = data.products;
        let infoSec = "";
        for (let i = 0; i < productos.length; i++) {
            producto = productos[i]
            infoSec += `
                    <article class="articulos">
                        <img class="fotos" src="${producto.thumbnail}">
                            <h3>${producto.title}</h3>
                            <p>${producto.description}</p>
                            <p>Precio: $${producto.price}</p>
                            <a class="detalles" href="./product.html?id=${producto.id}">VER DETALLES</a>
                    </article>
                `;
            
        }
        secDos.innerHTML += infoSec
    })
        .catch(function(error){
        console.log('El error es: ' + error);
    })
}


    

