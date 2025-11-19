let query = location.search;
let queryObj = new URLSearchParams(query);
let categoriaElegida = queryObj.get("category");


let categoryUrl = `https://dummyjson.com/products/category/${categoriaElegida}`;
let artGeneral = document.querySelector(".artGeneral");


fetch(categoryUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let categoryProducts = data.products;
        let categoryContenido = "";
        categoryContenido += `<h2 class="tituloGeneral"> ${categoriaElegida} </h2>`

        for (let i = 0; i < categoryProducts.length; i++) {
            categoryContenido += `
            <article class="articulos">
                <img class="fotos" src="${categoryProducts[i].thumbnail}" alt="${categoryProducts[i].title}">
                <h3>${categoryProducts[i].title}</h3>
                <p>${categoryProducts[i].description}</p>
                <p>$${categoryProducts[i].price}</p>
                <a class="detalles" href="./product.html?id=${categoryProducts[i].id}">VER DETALLES</a>
                </article>
            `;
        }

        artGeneral.innerHTML = categoryContenido;
    })

    .catch(function (error) {
        console.log('El error es: ' + error);
    })
