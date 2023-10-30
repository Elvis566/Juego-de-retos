var email = document.getElementById("username").ariaValueMax;
var password = document.getElementById("password").ariaValueMax;

var correo = "johanna.e.c@hotmail.com";
var contraseña = 12345;

if(email==correo)
{
    if(password==contraseña)
    {
        errorMessage.innerHTML="INGRESO EXITOSO"
        const Boton = document.getElementById("miBoton");

// Agrega un evento de clic al botón
    Boton.addEventListener("click", function() {
    // Redirecciona a otra página
    window.location.href = "../HTML/usuarios.html";
});
    }
}else{
    errorMessage.innerHTML="USUARIO O CONTRASEÑA INCORRECTOS"
}

