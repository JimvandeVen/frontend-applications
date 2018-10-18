var html = require('choo/html')
var TITLE = 'jeugdzorg - main'
var assets = ''
var Select = require("../components/Select")

module.exports = view

var select = new Select()


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
  <body>
    <h1>Jeugdhulp Risico Indicator</h1>
    <div class="flex">
      <section class="percentage">
        <div class= "yellow percentage">
          <h3>${state.calculated}%</h3>
        </div>
      </section>
      <section class="list">
        <h2>Belangrijke punten</h2>
        <ul class= "positives">${state.calculated ? state.calculated[1].importants[0].map(important => {
      return html` <li>${important}</li>`
    }) : null}</ul>
        <ul class= "negatives">${state.calculated ? state.calculated[1].importants[1].map(important => {
      return html` <li>${important}</li>`
    }) : null}</ul>
      </section>
    </div>
    <section class="form">
      <div class="formWrapper">
        <h2>Hoe het werkt</h2>
        <p>De Jeugdhulp Risico Indicator (JRI) is bedoeld als hulpmiddel voor de Jeugdhulpverleners. JRI berekent aan de hand van kenmerken, die overeenkomen met de veiligheidslijst, de kans dat een kind in het uithuisplaatsingstraject terecht komt. Dit percentage kan de hulpverlener helpen om eerder een inschatting te maken over de benodigde middelen voor het kind en het gezin.</p>
        <p>Rechts staan de verschillende gebieden. Door op een gebied te klikken zal een vragenlijst verschijnen. Vul alle vragen in per gebied door de juiste opties te selecteren. JRI zal  automatisch een risco berekenen. Naast het risico komen er ook belangrijke punten te staan. Dit zijn de 3 meest positieve factoren en 3 meest negatieve factoren. Deze kunnen gebruikt worden om de doelen voor een gezin bij te stellen.</p>
      </div>
      <div class="formWrapper">
        <h2>Formulier</h2>
        ${select.render(state, emit)}
      </div>
    </section>
  </body>`
}
