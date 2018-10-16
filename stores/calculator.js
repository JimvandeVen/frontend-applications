module.exports = calculator



function calculator (answers) {
  // console.log('calculate', answers)
  var gewichten = []
  answers.forEach(function(answer){
    var gewicht = answer.gewicht
    gewichten.push({gewicht, answer})
  })

  var gewichtenSum = gewichten.map(item => item.gewicht).reduce(function(accumulator, currentValue){
    return Number(accumulator) + Number(currentValue)
  }, 0)

  var percentage = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + gewichtenSum ) ) ) * 100 ).toFixed( 2 ) )
  // console.log("percentage", percentage)
  var importants = lowHigh(gewichten, answers)
  // console.log(lol)
  return [percentage, {importants}]
}

function lowHigh (gewichten, answers) {
  var gewichten = gewichten
  var answers = answers
  // console.log("answers", answers)
  gewichten.sort(function(a, b) {
  return a - b;
  })

  var importantGewichtenLow = gewichten.slice(0, 3)
  var importantGewichtenHigh = gewichten.slice(12, 15)
  // console.log("importantGewichten", importantGewichtenLow)
   var importantTypesHigh = []
   var importantTypesLow = []
  importantGewichtenLow.forEach(function(gewicht){
    importantTypesLow.push(gewicht.answer.type)
  })

  importantGewichtenHigh.forEach(function(gewicht){
    importantTypesHigh.push(gewicht.answer.type)
  })
  return [...importantTypesHigh, ...importantTypesLow]
}
