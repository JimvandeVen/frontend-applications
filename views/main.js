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
  <div class= "percentageCircles">
    <div class= "green percentage"><h3>1%</h3></div>
    <div class= "yellow percentage"><h3>2%</h3></div>
    <div class= "red percentage"><h3>3%</h3></div>
  </div>
  ${select.render(state, emit)}
  ${form.render(state, emit)}
  </body>`
}
