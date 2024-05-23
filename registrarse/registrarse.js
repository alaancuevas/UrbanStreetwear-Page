const containerForm = document.getElementById('container-form');
const nombres = document.getElementById('txtNombre');
const errorNombre = document.getElementById('errorNombre');
const apellido = document.getElementById('txtApellido');
const errorApellido = document.getElementById('errorApellido');
const email = document.getElementById('txtMail');
const errorEmail = document.getElementById('errorEmail');
const password = document.getElementById('txtPassword');
const errorPassword = document.getElementById('errorPassword');
const password2 = document.getElementById('txtPassword2');
const errorPassword2 = document.getElementById('errorPassword2');
const formularioDeContacto = document.querySelector('form');

nombres.focus();

function limpiarCampos(inputElement, errorElement) {
    errorElement.innerHTML = '';
    inputElement.classList.remove('error-campo');
    inputElement.value = '';
}

nombres.addEventListener('focus', function() {
    limpiarCampos(nombres, errorNombre);
});

apellido.addEventListener('focus', function() {
    limpiarCampos(apellido, errorApellido);
});

email.addEventListener('focus', function() {
    limpiarCampos(email, errorEmail);
});

password.addEventListener('focus', function() {
    limpiarCampos(password, errorPassword);
});

password2.addEventListener('focus', function() {
    limpiarCampos(password2, errorPassword2);
});

// Fijar modo de escritura 
nombres.addEventListener('input', function() {
    nombres.value = nombres.value.toUpperCase();
});
apellido.addEventListener('input', function() {
    apellido.value = apellido.value.toUpperCase();
});
email.addEventListener('input', function() {
    email.value = email.value.toLowerCase();
});

function validar() {
    errorNombre.textContent = '';
    errorApellido.textContent = '';
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    errorPassword2.textContent = '';
    nombres.classList.remove('error-campo');
    apellido.classList.remove('error-campo');
    email.classList.remove('error-campo');
    password.classList.remove('error-campo');
    password2.classList.remove('error-campo');

    let errores = [];
    let regex_nombres = /^[A-Za-z\s]{2,20}$/;
    let regex_apellido = /^[A-Za-z\s]{2,10}$/;
    let regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regex_password = /^(?=.*[A-Z])(?=(.*\d){3,}).{8,}$/;

    if (nombres.value.trim().length === 0 || !regex_nombres.test(nombres.value)) {
        errores.push("Debes ingresar tus nombres");
        errorNombre.innerHTML = "Campo obligatorio";
        nombres.classList.add('error-campo');
    }
    if (apellido.value.trim().length === 0 || !regex_apellido.test(apellido.value)) {
        errores.push("Debes ingresar tu/s apellidos");
        errorApellido.innerHTML = "Campo obligatorio";
        apellido.classList.add('error-campo');
    }

    if (email.value.trim().length === 0) {
        errores.push("Debes ingresar tu email");
        errorEmail.innerHTML = "Campo obligatorio";
        email.classList.add('error-campo');
    } else if (!regex_email.test(email.value)) {
        errores.push("Email inválido");
        errorEmail.innerHTML = "Email inválido";
        email.classList.add('error-campo');
    }

    if (password.value.trim().length === 0) {
        errores.push("Debes ingresar una contraseña");
        errorPassword.innerHTML = "Campo obligatorio";
        password.classList.add('error-campo');
    } else if (!regex_password.test(password.value)) {
        errores.push("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y 3 números");
        errorPassword.innerHTML = "Contraseña inválida";
        password.classList.add('error-campo');
    }

    if (password2.value.trim().length === 0) {
        errores.push("Debes repetir la contraseña");
        errorPassword2.innerHTML = "Campo obligatorio";
        password2.classList.add('error-campo');
    } else if (password.value !== password2.value) {
        errores.push("Las contraseñas no coinciden");
        errorPassword2.innerHTML = "Las contraseñas no coinciden";
        password2.classList.add('error-campo');
    }

    if (errores.length > 0) {
        errores.forEach(error => {
            console.log(error);
        });
        return false;
    } else {
        console.log("No hay errores en la carga del formulario");
        const enviado = document.getElementById('formulario-enviado');
        enviado.innerHTML = '';
        let contenido = document.createElement('div');
        contenido.innerHTML = `
            <div class='container-mensaje'>
                <div class='cont-mensaje'>
                    <h3>Hola ${nombres.value}!</h3>
                    <h2>Te registraste Exitosamente!!!</h2>
                    <h4>Ya sos parte de <span>UrbanStreetWear</span></4>
                    <p>Te invitamos a ver nuestros productos...</p>
                    <button id='irAProductos'>Ir a productos</button>
                </div>
            </div>
        `;
        enviado.appendChild(contenido);
        containerForm.style.display = 'none';

        const irAProductos = document.getElementById('irAProductos');
        irAProductos.addEventListener('click', function() {
            window.location.href = '../productos/productos.html';
        });
        registrarUsuario();
        return false; 
    }
}
function registrarUsuario(){
    let nombreUsuario = document.getElementById('txtNombre').value;
    let apellidoUsuario = document.getElementById('txtApellido').value;
    localStorage.setItem('nombreUsuario', nombreUsuario);
    localStorage.setItem('apellidoUsuario', apellidoUsuario);
    window.location.href='../index.html';
}

formularioDeContacto.addEventListener('submit', function(event) {
    event.preventDefault();
    validar();
});
