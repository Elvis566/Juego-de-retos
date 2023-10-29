
var baraja= []
for(let i=0; i<52; i++){
     baraja[i] =`../img/carta${i}.jpg.jpg`;
}
     // console.log(baraja); Verificando que el array se este llenando correctamente
     // Obtenemos la referencia al elemento de la lista ordenada
const listaOrdenada = document.getElementById('miLista');

// Inicializa un array vacío para almacenar los elementos de la lista
const elementosArray = [];

// Itera a través de los elementos de la lista y agrega cada elemento al array
const elementosLista = listaOrdenada.getElementsByTagName('li');
for (let i = 0; i < elementosLista.length; i++) {
  elementosArray.push(elementosLista[i].textContent);
}

// Ahora elementosArray contendrá los elementos de la lista como elementos de un array
// console.log(elementosArray);
const listaJugadores = document.getElementById('listaJugadores');


const jugadores = [];


const jugadoresListados = listaJugadores.getElementsByTagName('div');
for (let i = 0; i < jugadoresListados.length; i++) {
     jugadores.push(jugadoresListados[i].textContent);
}

console.log(jugadores)
var carta = document.getElementById("carta");
var reto = document.getElementById("reto");

// console.log( Math.floor(Math.random() * 52))
let c=0;
let rondasJugadas = [];
let contadorP = 0;
for(let i=0; i<jugadores.length; i++){
     rondasJugadas[i]=0;
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

