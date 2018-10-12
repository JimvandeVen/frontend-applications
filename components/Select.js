var ChooComponent = require("choo/component")
var html = require("choo/html")

module.exports = class Select extends ChooComponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    console.log(state)
      return html`
      <form>
      ${state.data.type.map(type => {
        return html`
        <div>
        <div>${type.name}</div>
          ${type.selects.map(select => {
            return html`
            <div>
              <label for=${select.name}>${select.name}</label>
              <select id=${select.name}>
              ${select.options.map(option =>{
                return html`
                <option>${option.name}</option>
                `
              })}
              </select>
              </div>
            `
          })}
        </div>
        `
      })}
      </form>
    `
  }
  update (state, emit) {
    return true
  }
}
