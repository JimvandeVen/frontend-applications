var html = require('choo/html')
var TITLE = 'jeugdzorg - main'
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
  ${form.render(state, emit)} ${sum.render(state, emit)} ${NumberOfClicks.render(state, emit)} ${select.render(state, emit)} 
  </body>`
}
