// recupero il pulsanti

const button = document.getElementById(`send`)
const reset = document.getElementById(`reset`)

// creo gli eventi click sui pulsanti

reset.addEventListener(`click`, function (e) {
  e.preventDefault()

  window.location.reload()

})

button.addEventListener(`click`, function (e) {
  e.preventDefault()

  // recuperiamo i valori delle form

  const name = document.getElementById(`name`).value
  const kilo = document.getElementById(`kilo`).value
  const age = document.getElementById(`age`).value

  // definizione variabili

  let priceTicket = kilo * 0.21

  // sconto under e over

  if (age === "Biglietto Under") {
    priceTicket = priceTicket * (1 - 0.20)
  }
  else if (age === "Biglietto Over") {
    priceTicket = priceTicket * (1 - 0.40)
  }

  // innietto i valori nel HTML

  document.getElementById(`show-name`).innerText = name
  document.getElementById(`show-kilo`).innerText = kilo + `Km`
  document.getElementById(`show-age`).innerText = age
  document.getElementById(`show-price`).innerText = parseFloat(priceTicket.toFixed(2)) + `€`

})