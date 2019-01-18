var fs = require('fs')


var data = fs.readFileSync( './third_input.txt', 'ascii', function(err, data) {
  return data
}).trim().split('\n')

function part1() {
  return data.reduce((sum, row) => {
    var row_num = parseInt(row.substring(1, row.length))

    if (row[0] == '-') {
      sum -= row_num
    } else {
      sum += row_num
    }
    return sum
  }, 0)
}

function part2() {
  var occured = [0]
  var sum = 0

  while(true) {
    for(var i = 0; i < data.length; i++) {
      var row = data[i]
      var row_num = parseInt(row.substring(1, row.length))
      if (row[0] == '-') {
        sum -= row_num
      } else {
        sum += row_num
      }

      if (occured.includes(sum)) {
        return sum
      }
      occured.push(sum)
    }
  }
}

// console.log('part1: ', part1())
console.log('part2: ', part2())
