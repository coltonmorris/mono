var fs = require('fs')

// read input data
var data = fs.readFileSync( './projects/advent-of-code/2017/1/input.txt', 'ascii', function(err, data) {
  return data
}).trim()

function step1() {
  var firstPass = true
  var sumArr = []
  for (var i = 0; i < data.length; i++) {
    var nextCharIndex = (i + 1)%data.length
    var nextChar = data[nextCharIndex]
    var currChar = data[i]

    if (nextChar == currChar) {
      sumArr.push(currChar)
    }
  }
  return sumArr.reduce((total, char) => (total + parseInt(char)), 0)
}

function step2() {
  var sumArr = []
  for (var i = 0; i < data.length; i++) {
    var nextCharIndex = (i + (data.length/2))%data.length
    var nextChar = data[nextCharIndex]
    var currChar = data[i]

    if (nextChar == currChar) {
      sumArr.push(currChar)
    }
  }
  return sumArr.reduce((total, char) => (total + parseInt(char)), 0)
}

console.log('answer 1: ', step1())
console.log('answer 2: ', step2())
