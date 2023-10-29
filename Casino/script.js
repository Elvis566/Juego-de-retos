// Declaración e inicialización de variables
var contador = 1; // Contador utilizado para asignar números únicos a los jugadores
var mitabla = document.getElementById("tabla"); // Obtener la referencia a la tabla en el HTML mediante su ID
var total = document.getElementById("jugadores");

// Función para guardar la información del jugador
function guardar(){
    // Obtener el elemento HTML que muestra el total de jugadores
    // Actualizar el contenido del elemento con el valor actual del contador
      total.innerHTML = contador;
  
    // Insertar una nueva fila en la tabla
    var filas = mitabla.insertRow();
  
    // Insertar celda para el número de jugador
    var celda0 = filas.insertCell(0);
    celda0.textContent = contador++;
  
    // Insertar celda para el nombre de usuario ingresado
    var celda1 = filas.insertCell(1);
    celda1.textContent = document.getElementById("usuario").value;
  }
  function limpiarInputs() {
    // Limpiar el valor de los campos de usuario, jugadores y eli
    document.getElementById("usuario").value = "";
    document.getElementById("jugadores").value = "";
    document.getElementById("eli").value = "";
  }
  function eliminar(){
    // Obtener el valor de ID a eliminar
    var Id_eliminar = document.getElementById("eli").value;
    // Obtener todas las filas de la tabla
    var filas = mitabla.getElementsByTagName("tr");
  
    // Recorrer las filas y eliminar la que tiene el ID coincidente
    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName("td");
        // Verificar si la fila tiene celdas y el ID coincide
        if (celdas.length > 0 && celdas[0].innerHTML === Id_eliminar) {
            mitabla.deleteRow(i);     
            let c= total.innerHTML // Se le aasigna el valor de total a la nueva variable
            c= c-1; //C viene con la cantidad de usuarios pero se le asigna un decremento de -1 por cada click en el boton
            total.innerHTML = c; 
            break; // Se encontró y eliminó la fila, salir del bucle
        }
    }
  }