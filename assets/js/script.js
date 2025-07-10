// // definizione variabili
// let priceTicket = km * 0.21

// // sconto minorenni
// if (age < 18) {
//   priceTicket = priceTicket * (1 - 0.20)
// }

// // sconto over 65
// if (age > 65) {
//   priceTicket = priceTicket * (1 - 0.40)
// }

// console.log(parseFloat(priceTicket.toFixed(2)))




// recupero il pulsante per inviare i dati della form

const button = document.getElementById(`send`)

// creo l'evento click sul pulsante

button.addEventListener(`click`, function (e) {
  e.preventDefault()

  // recuperiamo i valori delle form

  const name = document.getElementById(`name`).value
  const kilo = document.getElementById(`kilo`).value
  const age = document.getElementById(`age`).value

  console.log(name, kilo, age)
})