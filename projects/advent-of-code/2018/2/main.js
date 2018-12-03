var fs = require('fs')

// read input data
var data = fs.readFileSync( './input.txt', 'ascii', function(err, data) {
  return data
}).trim()


function part1() {
  function getCountsObject(row) {
    return row.split('').reduce((counts, char) => {
      if (counts[char]) {
        counts[char]++
      } else {
        counts[char] = 1
      }
      return counts
    }, {})
  }

  var twos = 0
  var threes = 0

  data = data.split('\n')
  for (var k = 0; k < data.length; k++) {
    var row = data[k]
    var counts = getCountsObject(row)

    if (Object.values(counts).includes(2)) {
      twos++
    }
    if (Object.values(counts).includes(3)) {
      threes++
    }
  }

  return twos * threes
}


function part2() {
  var permutations = []

  data = data.split('\n')
  for (var k = 0; k < data.length; k++) {
    var row = data[k]
    var encountered_permuations = []
    for (var i = 1; i < row.length + 1; i++) {
      var str = row.substring(0,i -1) + row.substring(i, row.length)

      // ensure we don't add the same permutation twice for this row to the permutations
      if (!encountered_permuations.includes(str)) {
        if (permutations.includes(str)) {
          return str
        }
        encountered_permuations.push(str)
        permutations.push(str)
      }
    }
  }
}

// console.log('answer 1: ', part1())
console.log('answer 2: ', part2())
