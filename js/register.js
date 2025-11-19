let formulario = document.querySelector(".formRegistro");
let email = document.querySelector("#email");
let val_email = document.querySelector(".validacionEmail");
let password = document.querySelector("#password");
let val_password = document.querySelector(".validacionPassword");
let rePassword = document.querySelector("#repassword")
let val_rePassword = document.querySelector(".validacionRePassword");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value == "") {
        val_email.innerText = "El campo no puede estar vacío.";
        val_email.style.display = "block";
        val_email.style.color = "red";
    }
    else if (password.value == "") {
        val_password.innerText = "El campo no puede estar vacío.";
        val_password.style.display = "block";
        val_password.style.color = "red";
    }
    else if (password.value.length < 6) {
        val_password.innerText = "La contraseña debe tener al menos 6 caracteres.";
        val_password.style.display = "block";
        val_password.style.color = "red";
    }
    else if (rePassword.value == "") {
        val_rePassword.innerText = "El campo no puede estar vacío.";
        val_rePassword.style.display = "block";
        val_rePassword.style.color = "red";
    }
    else if (rePassword.value != password.value) {
        val_rePassword.innerText = "Las contraseñas no coinciden";
        val_rePassword.style.display = "block";
        val_rePassword.style.color = "red";
    }
    else {
        this.submit()
    }
})
