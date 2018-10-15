var html = require('choo/html')
var TITLE = 'jeugdzorg - main'
var assets = ''
var Form = require("../components/Form")
var Sum = require("../components/Sum")
var NumberOfClicks = require("../components/NumberOfClicks")
var Select = require("../components/Select")

module.exports = view

var select = new Select()
var form = new Form()
var sum = new Sum()
var NumberOfClicks = new NumberOfClicks()


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`<body>
  <h1>Risico Indicatie</h1>
  <div><img src="./assets/laagpercentage.png"></div>
  <div><img src="./assets/middelpercentage.png"></div>
  <div><img src="./assets/hoogpercentage.png"></div>
  ${select.render(state, emit)}
  </body>`
}
