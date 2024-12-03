// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let kilometres = Number(prompt("quanti chilometri devi percorrere?"))
let age = Number(prompt("quanti anni hai?"))

//il biglietto costa 0.21€ al kilometro
const price= 0.21

//costo del biglietto a prezzo pieno
let totalPrice = kilometres * price

// prezzo del biglietto se hai meno di 18anni e più di 65anni
if (age < 18){
    let discount= totalPrice * 0.20
    let discountPrice = totalPrice - discount
    alert(`Il prezzo del tuo biglietto è: ${discountPrice.toFixed(2)} € `)
} else if (age > 65){
    let discount= totalPrice * 0.40
    let discountPrice = totalPrice - discount
    alert(`Il prezzo del tuo biglietto è: ${discountPrice.toFixed(2)} € `)
} else {
    alert(`Il prezzo del tuo biglietto è: ${totalPrice.toFixed(2)} € `)
}
