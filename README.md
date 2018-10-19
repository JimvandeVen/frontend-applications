# Jeugdhulp Risico Indicator
[DEMO](https://wizardly-heyrovsky-d5cf00.netlify.com/)  

## Introduction
Jeugdhulp Risico Indicator(JRI) was built for Gemeente Amsterdam to help the social workers get an indication of chance children in the youth services have of being placed into foster care. JRI wil help the social workers to see dangerous factors earlier and more often. JRI works with years of data, collected from youth services in the city of Amsterdam, to create the most accurate calculations.
  
![Screenshot of JRI](/assets/screenshot.png?)  

## Working with youth services
During the production of JRI we continually spoke with the social workers working in Amsterdam. They provided us with valuable insights regarding their work and wishes. One of those insights was seeing what the best and worst characteristics are in the child’s family. This way the social workers can take those characteristics and work with the family on those characteristics. I tried to work this insight into the application as best as possible.

## Used technology

* [choo.io](https://choo.io/)  
* [npm](https://www.npmjs.com/)

## New Javascript Concepts (for me)
Here I will list the Javascript concepts that were new for me, that I learned about during this project.

Frameworks(choo): During this project we learned how to use frameworks and how the handle routing, states, stores and components. This was completely new for me and had a quiet steep learning curve. But after the first week I had a moderately good understanding of how the choo framework handles the routing, states, stores and components. One thing that was especially nice was that choo has a lot in common with node.js, which i used previously. Choo works with state and emitters. Where state is used to store and transfer data within your application. Emitters are broadcasters that broadcast a signal across your entire application, wherein a listener `on.emit` listens for that broadcast and reacts to it.
``` js
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
    
    emitter.emit(state.events.RENDER)
  })
})
```
Javascript classes: I used Javascript classes for the first time. I felt they were really helpful in creating large forms dynamically from your data. With the use of classes you can create a lot of html with very little code. I love it!
``` js
module.exports = class Select extends ChooComponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
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

```
Template literals: Using classes in combination with the choo framework to create forms dynamically from your data, means you need to inject the state with the correct data into your html. To do this you need template literals.
``` js
<section class="list">
        <h2>Belangrijke punten</h2>
        <ul class= "positives">${state.calculated ? state.calculated[1].importants[0].map(important => {
      return html` <li>${important}</li>`
    }) : null}</ul>
        <ul class= "negatives">${state.calculated ? state.calculated[1].importants[1].map(important => {
      return html` <li>${important}</li>`
    }) : null}</ul>
      </section>
```
Various javasript functions: Some of these functions I knew of others i did not. For each function shown here this was the first time I actually used them. `map()` creates a new array filled with return value of the function you added to map. `reduce()` Adds up the contents of an array, they must be numbers. `slice()` Soft copies the contents of an array from a certain index until a certain index.
``` js
var gewichtenSum = gewichten.map(item => item.gewicht).reduce(function(accumulator, currentValue){
    return Number(accumulator) + Number(currentValue)
  }, 0)
  
var importantGewichtenLow = getImportantLow(gewichten).slice(0, 3)
var importantGewichtenHigh = getImportantHigh(gewichten).slice(-3)
```

## Process 
I decided, after getting the assignment and knowing which framework I was going to use, the first thing I wanted to do was understanding enough about the framework so I could start programming. It took me about two days to be confident enough to start. I knew beforehand the hardest part about this assignment would be writing decent logic, and using the framework, in such a way that it would produce the sought after results. That’s why I started on this first.

First I had to know what structure my form, the most important part of the user experience, should have. I decided upon a dropdown selector structure. Then I started to think that it would be a nice addition to render the form dynamically from de data provided. For this I needed Javascript classes and well-structured data. This took me another two days, the first week was already over.

The next piece of logic I wanted to write was the calculation of the percentage from the data that was put into the form. This was quite a headscratcher but i persevered and figured it out! And then there were percentages. I now decided the application I had been working on, and thus looking at, was in dire need of a visual makeover. Time to start on CSS. These together took me another two days.

![Screenshot of JRI pre-css](/assets/pre_css.png?)

Now I felt like made exactly the same application that Arjan de Jager. I had to add something extra. The insights we gained from talking to the social workers provided something extra. One of those insights was seeing what the best and worst characteristics are in the child’s family. This way the social workers can take those characteristics and work with the family on those characteristics. I decided I wanted this in my application. It was, at times, difficult to figure out where and how the data was stored and then to figure out what I needed from that data. But again I figured it out. This took me the better part of 2 days. The rest of these two days I finished my CSS and deployed the application. 

Forthermore what I really liked was the fact that after I finnished my application I helped a few other students who were working with other frameworks. In doing so I noticed that I had a good understanding of the concept of frameworks whisch meant I could further their progress even without understanding the specific syntax of their framework.

## If I had more time

Make a range of three percentages where the higher represents all the blank answers ending up bad, the lower representing all the blank answers ending up good and the middle percentage representing all the answers that are not blank. This way the social workers get a more real view of the percentage.

![Low percentage](/assets/laagpercentage.png?) ![Middel percentage](/assets/middelpercentage.png?) ![High percentage](/assets/hoogpercentage.png?)




## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
