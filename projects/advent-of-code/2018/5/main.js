// must be run with the following command
//
// sudo node --stack-size=16000 main.js
//

var fs = require('fs')

// read input data
var data = fs.readFileSync( './input.txt', 'ascii', function(err, data) {
  return data
}).trim()



function crawl(input) {
  if (input == '') {
    return ''
  }
  var didReduce = false

  // check and do a reduction
  var prevIndex
  for (var i = 1; i < input.length; i++) {
    prevIndex = i - 1
    var currChar = input[i]
    var prevChar = input[prevIndex]

    if (prevChar != currChar) {
      if (prevChar.toUpperCase() == currChar.toUpperCase()) {
        didReduce = true
        break
      }
    }
  }


  if (!didReduce) {
    return input
  }

  var newStr = input.slice(0, prevIndex) + input.slice(prevIndex + 2, input.length)

  return crawl(newStr)
}

function part1() {
  return crawl(data).length
}

function part2() {
  var strs = []
  for (var j = 0; j < 26; j++) {
    var chr = String.fromCharCode(97+j)
    strs.push(
      crawl(
        data.replace(new RegExp(chr, 'g'), '')
            .replace(new RegExp(chr.toUpperCase(), 'g'), '')
      ).length
    )
  }
  
  return Math.min(...strs)
}

// console.log('answer 1: ', part1())
console.log('answer 2: ', part2())
