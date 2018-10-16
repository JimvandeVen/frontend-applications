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
              <select class="answers" id=${select.name} onchange=${addAnswer}>
              ${select.options.map(option =>{
                return html`
                <option data-gewicht=${option.gewicht}>${option.name}</option>
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
    function addAnswer(){
      var selectedOptions = document.querySelectorAll(".answers")
      var selectedValues = []
      selectedOptions.forEach(function(select){
        var selectedIndex = select.selectedIndex
        var selectedValue = select.value
        var question = select.id
        var gewicht = select[selectedIndex].dataset.gewicht
        selectedValues.push({type: question, value: selectedValue, gewicht: gewicht})
        })
        emit("addAnswer", selectedValues)

      }
  }
  update (state, emit) {
    return false
  }
}
