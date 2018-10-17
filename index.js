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

app.use((state, emitter) =>{
  state.data = data

})
app.use((state, emitter)=>{
  state.answers = []

  emitter.on('addAnswer', function(answers){
    var {type, value, gewicht} = answers
    var obj = {type: type, value: value}

    state.answers.push(obj)
    state.calculated = calculator(answers, emitter)
    // var circle = document.querySelector(".yellow")
    // if (state.calculated[0] <= 2){
    //    circle.style.backgroundColor = "green"
    //    console.log("groen", circle.style.backgroundColor)
    //  } else if (state.calculated[0] <= 5) {
    //    circle.style.backgroundColor = "yellow"
    //  } else {
    //    circle.style.backgroundColor = "red"
    //  }

    emitter.emit(state.events.RENDER)
  })
})

module.exports = app.mount('body')
