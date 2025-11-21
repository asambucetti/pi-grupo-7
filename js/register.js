let formulario = document.querySelector(".formRegistro");
let email = document.querySelector("#email");
let valEmail = document.querySelector(".validacionEmail");
let password = document.querySelector("#password");
let valPassword = document.querySelector(".validacionPassword");
let rePassword = document.querySelector("#repassword")
let valRePassword = document.querySelector(".validacionRePassword");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value == "") {
        valEmail.innerText = "El campo no puede estar vacío.";
        valEmail.style.display = "block";
        valEmail.style.color = "red";
    }
    else if (password.value == "") {
        valPassword.innerText = "El campo no puede estar vacío.";
        valPassword.style.display = "block";
        valPassword.style.color = "red";
    }
    else if (password.value.length < 6) {
        valPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
        valPassword.style.display = "block";
        valPassword.style.color = "red";
    }
    else if (rePassword.value == "") {
        valRePassword.innerText = "El campo no puede estar vacío.";
        valRePassword.style.display = "block";
        valRePassword.style.color = "red";
    }
    else if (rePassword.value != password.value) {
        valRePassword.innerText = "Las contraseñas no coinciden";
        valRePassword.style.display = "block";
        valRePassword.style.color = "red";
    }
    else {
        this.submit()
    }
})
