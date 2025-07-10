// recupero il pulsante per inviare i dati della form

const button = document.getElementById(`send`)

// creo l'evento click sul pulsante

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

  document.getElementById(`show-name`).innerText = name
  document.getElementById(`show-age`).innerText = age
  document.getElementById(`show-price`).innerText = parseFloat(priceTicket.toFixed(2)) + `€`

})