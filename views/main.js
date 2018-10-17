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
    <h1>Risico Indicatie</h1>
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
        <h2>Formulier</h2>
        ${select.render(state, emit)}
    </section>
  </body>`
  console.log("state.calculated", state.calculated)
}
