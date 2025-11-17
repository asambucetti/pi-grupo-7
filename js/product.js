//query string de product
let query = location.search;
let queryObj = new URLSearchParams(query);
let productoElegido = queryObj.get("buscador");

let productUrl = 'https://dummyjson.com/products?q=${productoElegido}'
let imgProduct = document.querySelector(".imgFlynn")
let nombreProduct = document.querySelector(".articulosProduct h2")
let descripcionProduct = document.querySelector(".articulosProduct h3")
let precioProduct = document.querySelector(".articulosProduct h4")
let marcaProduct = document.querySelector(".articulosProduct p.marca")
let categoriaProduct = document.querySelector(".articulosProduct p.categoria")
let stockProduct = document.querySelector(".articulosProduct p.disponible")
let tagsProduct = document.querySelector(".articulosProduct p.tags")
let reviewsContenido = document.querySelector(".reviews");

categoriaProduct.style.color = "black";

fetch(productUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        imgProduct.src = data.thumbnail;
        imgProduct.alt = data.title;


        nombreProduct.innerText = data.title;
        descripcionProduct.innerText = data.description;
        precioProduct.innerText = "$" + data.price;

        //en este caso es innerHTML porque si fuese innerText se perderia el strong de Marca, se pierde el estilo.
        marcaProduct.innerHTML = "<strong>Marca:</strong>" + data.brand;


        categoriaProduct.innerHTML = `<strong>Categoria:</strong> <a href="./category.html?category=${data.category}">${data.category}</a>`;

        //Para el stock, debo aplicar la teoria de condicionales.
        if (data.stock > 0) {
            stockProduct.innerHTML = "<strong>Stock:</strong> Disponible";
        }
        else {
            stockProduct.innerHTML = "<strong>Stock:</strong> Sin Stock";
        }

        //TAGS
        let productAllTags = "";

        for (let i = 0; i < data.tags.length; i++) {
            productAllTags += "#" + data.tags[i] + "";

        }
        tagsProduct.innerHTML = "<strong>" + productAllTags + "</strong>";

        //REVIEWS
        let contenido = `<h2 class="tituloReviews">REVIEWS</h2>`;
       

            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i];

                let emojiRating = "";
                for (let r = 0; r < review.rating; r++) {
                    emojiRating += "⭐️";
                }

                contenido += `<article class="usuario">
                        <p><strong>Usuario: ${review.reviewerName}</strong> (${review.date}) </p>
                            <br>
                        <p class="comentarioFlynnPaff"> "${review.comment}" </p>
                        <br>
                        <strong>Rating: ${emojiRating}</strong>
                        </p>
                    </article>`;
            }

        reviewsContenido.innerHTML = contenido;

    })

    .catch(function (error) {
        console.log(error)
    })