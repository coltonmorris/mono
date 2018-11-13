var fs = require('fs')

// read input data
var data = fs.readFileSync( './projects/advent-of-code/2017/2/input.txt', 'ascii', function(err, data) {
  return data
}).trim()


function step1() {
  return data.split('\n').reduce((total, row) => {
    row = row.split('\t')
    var largest = row[0]
    var smallest = row[0]

    for (var i = 0; i < row.length; i++) {
      if (row[i] >= parseInt(largest)) {
        largest = row[i]
      } else if (row[i] <= parseInt(smallest)) {
        smallest = row[i]
      }
    }

    return total + (parseInt(largest) - parseInt(smallest))
  }, 0)
}


function step2() {
  return data.split('\n').reduce((total, row) => {
    row = row.split('\t')

    var val = 0
    for (var i = 0; i < row.length; i++) {
      for (var j = 0; j < row.length; j++) {
        if (j == i) { // dont evaluate the same index
          continue
        }

        if (parseInt(row[i]) % parseInt(row[j]) == 0) {
          return total +  parseInt(row[i])/parseInt(row[j])
        }
      }
    }
  }, 0)
}

console.log('answer 1: ', step1())
console.log('answer 2: ', step2())
