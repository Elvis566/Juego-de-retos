var email = document.getElementById("username").ariaValueMax;
var password = document.getElementById("password").ariaValueMax;

var correo = "johanna.e.c@hotmail.com";
var contraseña = 12345;

if(email==correo)
{
    if(password==contraseña)
    {
        errorMessage.innerHTML="INGRESO EXITOSO"
    }
}else{
    errorMessage.innerHTML="USUARIO O CONTRASEÑA INCORRECTOS"
}

