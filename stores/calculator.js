module.exports = calculator



function calculator (answers) {
  // console.log('calculate', answers)
  var gewichten = []
  answers.forEach(function(answer){
    var gewicht = answer.gewicht
    gewichten.push(gewicht)
  })

  gewichten.sort(function(a, b) {
  return a - b;
  })
   console.log("gewichten", gewichten)

  var gewichtenSum = gewichten.reduce(function(accumulator, currentValue){
    return Number(accumulator) + Number(currentValue)
  }, 0)

  var percentage = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + gewichtenSum ) ) ) * 100 ).toFixed( 2 ) )
  // console.log("percentage", percentage)
  return percentage
}
