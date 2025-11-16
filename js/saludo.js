let usuario = localStorage.getItem('email');

let menu = document.querySelector(".menuGeneral");  // estoy llamando a la barria de login, register, etc


if (usuario != null) {        // solo si el usuario hizo el login

    menu.innerHTML = `
        <li><a class="menu">Bienvenido: ${usuario} </a></li>
        <li><a href="#" class="menu" id="logout">Logout</a></li>
    `
    // aca, el href y el id logout me vana. servir para dsp

}


