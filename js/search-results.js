let query = location.search;
let queryObj = new URLSearchParams(query);
let valorBuscado = queryObj.get("buscador");

let tituloResultados = document.querySelector(".tituloGeneral");
let tituloNoResultados = document.querySelector(".tituloGeneral.ocultar");
let articulos = document.querySelector(".artGeneral");
tituloResultados.innerText = `Resultados de búsqueda para: ${valorBuscado}.`

let urlSearchResults = `https://dummyjson.com/products/search?q=${valorBuscado}`


fetch(urlSearchResults)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        if (productos.length == 0) {
            tituloResultados.style.display = "none";
            tituloNoResultados.innerText = `No hay resultados para el término: ${valorBuscado}.`;
            tituloNoResultados.style.display = "block";
        }
        else {
            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];
                articulos.innerHTML += `
                    <article class="articulos">
                        <img class="fotos" src="${producto.thumbnail}">
                            <h3>${producto.title}</h3>
                            <p>${producto.description}</p>
                            <p>Precio: $${producto.price}</p>
                            <a class="detalles" href="./product.html?id=${producto.id}">VER DETALLES</a>
                    </article>
                `;

            }
        }
    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });


