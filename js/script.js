// Scrivi un programma che esegua un ciclo da 1 a 100
// e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
let main = document.getElementById("main");
// nomi quadrati
let fizz = "fizz"
let buzz = "buzz"
let fizzbuzz = "fizzbuzz"

// per i multipli di 3,
// per i multipli di 5
for (let i = 1; i<=100; i++){
    // main.innerHTML += "<div class='quadrato d-flex flex-wrap'></div>";

    if (i % 3 == 0) {
        main.innerHTML += "<div class='quadrato d-flex flex-wrap fizz'></div>";
    } else if (i % 5 == 0) {
        main.innerHTML += "<div class='quadrato d-flex flex-wrap buzz'></div>";
    } 
}


// e per i valori che sono sia multipli di 3 che di 5.