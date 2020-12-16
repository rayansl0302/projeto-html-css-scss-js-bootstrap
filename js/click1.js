
function homepage() {
    var email = document.getElementById("email");
    var psw = document.getElementById("psw");
    if (email && email.checkValidity() && psw &&  psw.checkValidity()) {
        localStorage.setItem('EMAIL',email.value);
        location.href = "homepage.html";
    }

}

function logado() {
    
    var emailLogado = localStorage.getItem('EMAIL');
    document.getElementById("user").innerHTML = emailLogado;
}

function deslogar() {
    localStorage.clear()
}