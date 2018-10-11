var css = require('sheetify')
var choo = require('choo')

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
  emitter.on('DOMContentLoaded', () => {
    console.log('data')
  })
})

module.exports = app.mount('body')
