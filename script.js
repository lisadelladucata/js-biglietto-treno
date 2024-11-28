// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let kilometres = Number(prompt("quanti chilometri devi percorrere?"))
let age = Number(prompt("quanti anni hai?"))
const price= 0.21
const priceUnderage = price - 0.05
const priceOverage = 0.12
// prezzo del biglietto in base ai kilometri
if (kilometres >= 1 && age >= 18 && age < 65){
    alert(price * kilometres +"€")
} 
// prezzo del biglietto se hai meno di 18anni 
if (age < 18){
    alert(priceUnderage * kilometres + "€")
}

// prezzo del biglietto se hai più di 65 anni 

if (age > 65){
    alert (priceOverage * kilometres + "€")
}