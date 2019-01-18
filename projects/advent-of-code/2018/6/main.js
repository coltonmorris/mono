var fs = require('fs')

// read input data
var data = fs.readFileSync( './second_input.txt', 'ascii', function(err, data) {
  return data
}).trim().split('\n')


function transformData(d) {
  return d.map((line) => {
    var x = parseInt(line.split(',')[0])
    var y = parseInt(line.split(',')[1].trim())
    return { x: x, y: y }
  })
}


function part1() {
  // 1, 1
  // remove
  var data = data.map((
  var finite = []
}


function part2() {
}

console.log('answer 1: ', part1())
// console.log('answer 2: ', part2())
