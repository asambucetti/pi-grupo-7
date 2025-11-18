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
})


// api dinamica

let url = "https://dummyjson.com/products/category-list";
let lista = document.querySelector(".listaCategorias");

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);  //el array de categorias

        let contenido = "";

        for (let i = 0; i < data.length; i++) {

            contenido += `<li>
            <li><a href="./category.html?id=${data[i]}" class="categoria">${data[i]}</a></li>
        </li>`

            lista.innerHTML = contenido;

        }
    })
    .catch(function (error) {
        console.log(error)
    })
