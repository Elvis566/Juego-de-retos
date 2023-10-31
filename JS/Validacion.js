var email = document.getElementById("username");
var password = document.getElementById("password");

var correo = "elvis";
var contraseña = "12345";

function validateLogin(){
    debugger
    if(email.value===correo)
    {
        if(password.value==contraseña)
        {
           alert("INGRESO EXITOSO")
            const Boton = document.getElementById("miBoton");
            Boton.addEventListener("click", function(){
                window.location.href = "../HTML/usuarios.html"
            })
        }else{
            alert("USUARIO O CONTRASEÑA INCORRECTOS")
        }
    }else{
        alert("USUARIO O CONTRASEÑA INCORRECTOS")
    }
}


