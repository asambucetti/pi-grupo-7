//query string de product
let query = location.search;
let queryObj = new URLSearchParams(query);
let productoElegido = queryObj.get("id");


let productUrl = `https://dummyjson.com/products/${productoElegido}`


let producto = document.querySelector(".displayCaramelo")
let reviews = document.querySelector(".usuario")

fetch(productUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let tagsTexto = "";
        for (let i = 0; i < data.tags.length && i < 3; i++) {
            tagsTexto += `${data.tags[i]}`;
        }

        producto.innerHTML = `
            <article class="articulosProduct">
                <img class="imgFlynn" src="${data.thumbnail}" alt="${data.title}">
            </article>
            <article class="articulosProduct">
                <h2>${data.title}</h2>
                <h3>${data.description}
                </h3>
                <h4><strong>$${data.price}</strong></h4>
                <p class="marca"><strong>Marca:</strong> ${data.brand}</p>
                <p class="categoria"><strong>Categoria:</strong> <a href="./category.html?category=${data.category}">
                ${data.category} </a></p>
                <p class="disponible"><strong class="stock">Stock:</strong> ${data.stock}</p>
                <p class="tags"><strong>${tagsTexto}</strong></p>
            </article>`;




            //REVIEWS


        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i];
            let emojiRating = "";
            for (let r = 0; r < review.rating; r++) {
                emojiRating += "⭐️";
            }}
            reviews.innerHTML += `
                <p><strong>Usuario: ${review.reviewerName} </strong> (${review.date})
                </p>
                <br>
                <p class="comentarioFlynnPaff"> ${review.comment}</p>
                <br>
                <strong>${review.rating} ${emojiRating}</strong> </p>`
            ;
        })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });
