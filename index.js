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

app.use(require('./stores/clicks'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

app.use((state, emitter) =>{
  state.data = data
})

app.use((state, emitter)=>{
  state.answers = []

  emitter.on('addAnswer', function(answer){
    var {type, value} = answer
    // console.log('answer emitted', answer)
    var obj = {type: type, value: value}
    state.answers.push(obj)
    state.sum = calculator(answer)
    emitter.emit(state.events.RENDER)
  })
})

module.exports = app.mount('body')
