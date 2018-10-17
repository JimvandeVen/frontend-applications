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
        <div class="formPart">
        <h3 class="type" onclick=${selectType}>${type.name}</h3>
          ${type.selects.map(select => {
            return html`
            <div class="notSelected ${type.name.replace(/ /g, "")}">
              <label for=${select.name}>${select.name}</label>
              <select class="answers" id=${select.name} onchange=${addAnswer}>
                <option selected value> -- selecteer een antwoord -- </option>
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

    function selectType(){
      var type = this.innerText.replace(/ /g, "")
      this.classList.toggle("active")
      document.querySelectorAll(`.${type}`).forEach((element)=> {
        element.classList.toggle("notSelected")
      })
    }

    function addAnswer(){
      var selectedOptions = Array.from(document.querySelectorAll(".answers"))
        .filter(function(answer){
          return answer.selectedIndex != 0
          })
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
