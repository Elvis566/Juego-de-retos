// Reciviendo el array que contiene el nombre de los jugadores, que se registraron en la pagina anterior
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var jugadores = JSON.parse(urlParams.get("datos"));

// Declarando el array que contendra las imagenes de las cartas
var baraja= [];

// Llenando de forma automatica el array con las imagenes
for(let i=0; i<52; i++){
     baraja[i] =`../img/carta${i}.jpg.jpg`;
}
// console.log(baraja); Verificando que el array se este llenando correctamente

// Obtenemos la referencia al elemento de la lista ordenada donde tenemos almecenados los retos
const listaOrdenada = document.getElementById('miLista');

// Inicializa un array vacío para almacenar los elementos de la lista, en este caso los retos
const elementosArray = [];

// Itera a través de los elementos de la lista y agrega cada elemento al array
const elementosLista = listaOrdenada.getElementsByTagName('li');
for (let i = 0; i < elementosLista.length; i++) {
  elementosArray.push(elementosLista[i].textContent);
}
// console.log(elementosArray);

// Asignando un avatar a cada jugador ingresado
var listaJugadores = document.getElementById('listaJugadores');
for (let i = 0; i < jugadores.length; i++) {
      // 1. Crea un nuevo elemento de lista (div)
      var nuevoElemento = document.createElement("div");
      // 2. Agrega clase css
      nuevoElemento.className = "e1";
      // 3. Crea un nodo de texto para el contenido del nuevo elemento
      var contenido = document.createTextNode(jugadores[i]);

      // 4. Agrega el nodo de texto al nuevo elemento
      nuevoElemento.appendChild(contenido);

      // 5. Agrega el nuevo elemento a la lista
      listaJugadores.appendChild(nuevoElemento);
}

// Referenciando las variable para iterar los retos y su respectiva carta
var carta = document.getElementById("carta");
var reto = document.getElementById("reto");

// console.log( Math.floor(Math.random() * 52))
let c=0; //contador para iterar y dar funcionamiento
let rondasJugadas = [];//Array para definir un contador a cada jugador pontador para rondas por jugador
let contadorP = 0; //contador para contavilizar el numero de partidas
for(let i=0; i<jugadores.length; i++){
     rondasJugadas[i]=0;//iniciando los contadores por ronda de jugador en 0
}
function juego(){
     if(c>=jugadores.length){
          c=0;
     }
     alert(`Este es el turno de ${jugadores[c]}`);
     rondasJugadas[c]++;
     c++;
     if(c>=jugadores.length){
          contadorP++;
     }
     let indice =Math.floor(Math.random() * 52);
     carta.src=  baraja[indice];
     reto.value = elementosArray[indice];
}

function finalizar(){
     alert(`Se jugaron un total de: ${contadorP} partidas`)
     for(let i = 0 ; i<jugadores.length ; i++){
          alert(`${jugadores[i]} jugó ${rondasJugadas[i]} veces`);
     }

}

const finalizarBoton = document.getElementById("finalizar");

// Agrega un evento de clic al botón
finalizarBoton.addEventListener("click", function() {
    // Redirecciona a otra página
    window.location.href = "../HTML/usuarios.html";
});

