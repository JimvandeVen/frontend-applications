var html = require('choo/html')
var TITLE = 'jeugdzorg - main'
var Form = require("../components/Form")
var Sum = require("../components/Sum")
module.exports = view

// var calculator = require('./caculator.js')


var form = new Form()
var sum = new Sum()

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`<body>
  ${form.render(state, emit)} ${sum.render(state, emit)}
  </body>`
}
