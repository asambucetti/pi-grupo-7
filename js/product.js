let productUrl = 'https://dummyjson.com/products/1'
let imgProduct = document.querySelector(".imgFlynn")
let nombreProduct = document.querySelector(".articulosProduct h2")
let descripcionProduct = document.querySelector (".articulosProduct h3")
let precioProduct = document.querySelector (".articulosProduct h4")
let marcaProduct = document.querySelector (".articulosProduct p.marca")
let categoriaProduct = document.querySelector (".articulosProduct p.categoria")
let stockProdcut = document.querySelector (".articulosProduct p.disponible")
let tagsProduct = document.querySelector (".articulosProduct p.tags")

categoriaProduct.style.color = "black";

fetch (productUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        // NO SE COMO HACER LA IMAGEN

        nombreProduct.innerText = data.title;
        descripcionProduct.innerText = data.description;
        precioProduct.innerText = "$" + data.price

        //en este caso es innerHTML porque si fuese innerText se perderia el strong de Marca, se pierde el estilo.
        marcaProduct.innerHTML = "<strong>Marca:</strong>" + data.brand;


        categoriaProduct.innerHTML = `<strong>Categoria:</strong> <a href="./category.html?category=${data.category}">${data.category}</a>`;

        //Para el stock, debo aplicar la teoria de condicionales.
        if (data.stock > 0){
            stock.innerHTML = "<strong>Stock:</strong> Disponible";
        }
        else{
            stock.innetHTML = "<strong>Stock:</strong> Sin Stock";
        }

        //TAGS
        let productAllTags = "";

        for (let i = 0; i < data.tags.length; i++) {
            producAllTags += "#" + data.tags[i] + "";

        }
        tagsProduct.innerHTML = "<strong>" + productAllTags + "</strong>";

    })

    .catch(function(error){
        console.log(error)
    })


    //REVIEWS
    let reviewsUrl = 'https://dummyjson.com/comments/1'
    let reviewsContenido = document.querySelector(".reviews");

    fetch('https://dummyjson.com/comments/1')
        .then (function(response){
            return response.json();
        })
         .then (function(data){
            console.log(data);
            
            let contenido = `<h2 class="tituloReviews">REVIEWS</h2>`; 

            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews [i];
            
                contenido += `<article class="usuario">
                        <p><strong>Usuario: ${review.reviewerName}</strong> (${review.date})
                            <br>
                        <p class="comentarioFlynnPaff"> "${review.comment}" </p>
                        <br>
                        <strong>Rating: ${"⭐️"(review.rating)}</strong>
                        </p>
                    </article>`;
            }
        
        reviewsContenido.innerHTML = contenido
         })

        .catch(function(error){
        console.log(error)
    })