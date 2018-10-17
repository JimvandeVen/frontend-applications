module.exports = calculator



function calculator (answers, emitter) {
  var gewichten = []
  answers.forEach(function(answer){
    var gewicht = answer.gewicht
    gewichten.push({gewicht, answer})
  })

  var gewichtenSum = gewichten.map(item => item.gewicht).reduce(function(accumulator, currentValue){
    return Number(accumulator) + Number(currentValue)
  }, 0)

  var percentage = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + gewichtenSum ) ) ) * 100 ).toFixed( 2 ) )
  var importants = lowHigh(gewichten, answers)
  emitter.emit("render")
  return [percentage, {importants}]
}

function lowHigh (gewichten, answers) {
  var gewichten = gewichten
  var answers = answers

  gewichten.sort(function(a, b) {
  return a - b;
  })

  function getImportantHigh(input){
    return input.filter(function(answer){
      return answer.gewicht <= 0
    })
  }
  function getImportantLow(input){
    return input.filter(function(answer){
      return answer.gewicht > 0
    })
  }

  var importantGewichtenLow = getImportantLow(gewichten).slice(0, 3)
  var importantGewichtenHigh = getImportantHigh(gewichten).slice(-3)

  var importantTypesHigh = []
  var importantTypesLow = []

  importantGewichtenLow.forEach(function(gewicht){
    importantTypesLow.push(gewicht.answer.type)
  })

  importantGewichtenHigh.forEach(function(gewicht){
    importantTypesHigh.push(gewicht.answer.type)
  })

  return [importantTypesHigh, importantTypesLow]
}
