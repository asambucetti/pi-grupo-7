let logout = document.querySelector("#logout");

if (logout) {
    logout.addEventListener('click', function (e) {
        localStorage.clear();   // borro el login del local storage
        location.href = "index.html";
    })
}
