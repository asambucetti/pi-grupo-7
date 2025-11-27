let usuario = localStorage.getItem('email');

let menu = document.querySelector(".menuGeneral");  // estoy llamando a la barria de login, register, home


if (usuario != null) {        // solo si el usuario hizo el login

    menu.innerHTML = `
    <li><a href="#" class="menu" id="logout">Logout</a></li>
    <li><a class="menu">Bienvenido ${usuario}</a></li>
    `
}


