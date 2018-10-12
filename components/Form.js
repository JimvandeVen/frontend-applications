var ChooComponent = require("choo/component")
var html = require("choo/html")



module.exports = class Form extends ChooComponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <main>
        <form id="algemeen">
          <label for="geslacht">geslacht</label>
          <select class="form" onchange=${addAnswer} id="geslacht" name="geslacht">
            <option value="man">man</option>
            <option value="vrouw">vrouw</option>
          </select>
          <label for="leeftijdKind">Leeftijd van het kind</label>
          <select class="form" onchange=${addAnswer} id="leeftijdKind" name="leeftijdKind">
            <option value="0 tot 4 jaar">0 tot 4 jaar</option>
            <option value="4 tot 8 jaar">4 tot 8 jaar</option>
            <option value="8 tot 12 jaar">8 tot 12 jaar</option>
            <option value="12 tot 16 jaar">12 tot 16 jaar</option>
            <option value="16 tot 18 jaar">16 tot 18 jaar</option>
          </select>
        </form>


      <h2>4.</h2>

        <p>
          So far we've provided you with one base view, <a
          href="/oh-no">one fallback view</a>, and one store. This serves
          as an example. A place to start from. It's your project now, so
          go ahead and delete them once you know how they work.
        </p>

        <button onclick=${handleClick}>Emit a click event</button>
      </main>
    `
    function addAnswer(){
      var selectedOptions = document.querySelectorAll(".form")
      var selectedValues = []
      selectedOptions.forEach(function(select){
        var selectedValue = select.value
        var question = select.name
        selectedValues.push({type: question, value: selectedValue })
        })
        emit("addAnswer", selectedValues)
      }

      function handleClick () {
        emit("clicks:add", 1)
      }
  }

  update (state, emit) {
    return false
  }
}
