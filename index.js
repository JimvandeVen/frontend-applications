var css = require('sheetify')
var choo = require('choo')
var calculator = require('./stores/calculator')
var data = require('./assets/data')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

app.use(require('./stores/clicks'))
app.use((state, emitter) =>{
  state.data = data
})
app.use((state, emitter)=>{
  state.answers = []

  emitter.on('addAnswer', function(answers){
    var {type, value, gewicht} = answers
    var obj = {type: type, value: value}

    // console.log('answer emitted', answers)

    state.answers.push(obj)
    state.calculated = calculator(answers)
    console.log("state.calculated", state.calculated)
    emitter.emit(state.events.RENDER)
  })
})

module.exports = app.mount('body')
