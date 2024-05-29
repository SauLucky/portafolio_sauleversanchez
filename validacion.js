document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    validarDatos();
});

function validarDatos() {
    const form = document.forms['form']; // Acceder al formulario por su nombre
    const nombre = form['nombre'].value.trim();
    const email = form['email'].value.trim();
    const asunto = form['asunto'].value.trim();
    const mensaje = form['mensaje'].value.trim();
    
    if (nombre === "") {
        alert("Campo nombre es obligatorio");
        form['nombre'].focus();
        return;
    }

    if (email === "") {
        alert("Campo e-mail es obligatorio");
        form['email'].focus();
        return;
    }

    if (asunto === "") {
        alert("Campo Asunto es obligatorio");
        form['asunto'].focus();
        return;
    }

    if (mensaje === "" || mensaje.length <= 50) {
        alert("Campo Mensaje es obligatorio y debe tener más de 50 caracteres");
        form['mensaje'].focus();
        return;
    }

    if (!validarEmail(email)) {
        alert("e-mail inválido");
        form['email'].focus();
        return;
    }

}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}