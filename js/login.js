let formulario = document.querySelector(".form");
let email = document.querySelector("#email");
let val_email = document.querySelector(".validacionEmail");
let password = document.querySelector("#password");
let val_password = document.querySelector(".validacionPassword");


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
    else {
        localStorage.setItem('email', email.value);
        this.submit();
    }
})