var ChooComponent = require("choo/component")
var html = require("choo/html")

module.exports = class NumberOfClicks extends ChooComponent {
  constructor(){
    super()
  }
  createElement (state, emit){
    return html`
      <p>Number of clicks stored: ${state.totalClicks}</p>
    `
  }
  update (state, emit){
  return true
  }
}
