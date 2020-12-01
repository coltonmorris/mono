var fs = require('fs')


var data = fs.readFileSync( './projects/advent-of-code/2020/1/second_input.txt', 'ascii', function(err, data) {
  return data
}).trim().split('\n')

function part1() {
  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data.length; j++) {
      var num_1 = parseInt(data[i])
      var num_2 = parseInt(data[j])

      if (num_1 + num_2 == 2020 && i != j) {
        return num_1 * num_2
      }
    }
  }
}

function part2() {
  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data.length; j++) {
      for(var k = 0; k < data.length; k++) {
        var num_1 = parseInt(data[i])
        var num_2 = parseInt(data[j])
        var num_3 = parseInt(data[k])

        if (num_1 + num_2 + num_3 == 2020 && i != j != k) {
          return num_1 * num_2 * num_3
        }
      }
    }
  }
}

// console.log('part1: ', part1())
console.log('part2: ', part2())
