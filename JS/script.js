// en este primer apartado se alojara el codigo de Johanna 





// En este segundo apartado se alojara el codigo de Yuseydi




// En este tercer apartado se alojara el codigo de Elvis 
var baraja= []
for(let i=0; i<52; i++){
     baraja[i] =`../img/carta${i}.jpg.jpg`;
}
     // console.log(baraja); Verificando que el array se este llenando correctamente

var carta = document.getElementById("carta")

carta.src=  baraja[Math.floor(Math.random() * 52)];
console.log( Math.floor(Math.random() * 52))

