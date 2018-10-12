var ChooComponent = require("choo/component")
var html = require("choo/html")

module.exports = class Sum extends ChooComponent {
  constructor () {
    super()
  }
  createElement (state, emit) {
    console.log(state.sum)
    return html`
      <p>state.sum is : ${state.answers} ijsnivjnfdvinj</p>

    `
  }
  update (state, emit) {
    return true
  }
}
