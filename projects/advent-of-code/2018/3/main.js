var fs = require('fs')

// read input data
var data = fs.readFileSync( './input.txt', 'ascii', function(err, data) {
  return data
}).trim().split('\n')


function part1() {
  // atleast 1000 on each side
  // #123 @ 3,2: 5x4
  // id    left edge, top edge, inner_rectangle(wide x tall)
  var square = {}
  for (var k = 0; k < data.length; k++) {
    var row = data[k]

    var id = row.split(' ')[0]
    var left_edge = parseInt(row.split(' ')[2].split(',')[0])
    var top_edge = parseInt(row.split(' ')[2].split(',')[1].slice(0,-1))
    var wide = parseInt(row.split(' ')[3].split('x')[0])
    var tall = parseInt(row.split(' ')[3].split('x')[1])
  

    for (var h = top_edge; h < top_edge + tall; h++) {
      for (var w = left_edge; w < left_edge + wide; w++) {
        if (!square[h]) {
          // didnt overlap
          square[h] = {}
          square[h][w] = 1
        } else if (square[h] && !square[h][w]) {
          // didnt overlap
          square[h][w] = 1
        } else {
          square[h][w]++
        }
      }
    }
  }

  return Object.keys(square).reduce((total, row) => (
    total += Object.values(square[row]).reduce((count, ele) => {
      if (ele >= 2) {
        return count += 1
      }
      return count
    }, 0)
  ), 0)

}


function part2() {
  // atleast 1000 on each side
  // #123 @ 3,2: 5x4
  // id    left edge, top edge, inner_rectangle(wide x tall)
  var square = {}
  var possible_ids = {}
  for (var k = 0; k < data.length; k++) {
    var row = data[k]

    var id = parseInt(row.split(' ')[0].substring(1))
    var left_edge = parseInt(row.split(' ')[2].split(',')[0])
    var top_edge = parseInt(row.split(' ')[2].split(',')[1].slice(0,-1))
    var wide = parseInt(row.split(' ')[3].split('x')[0])
    var tall = parseInt(row.split(' ')[3].split('x')[1])


    possible_ids[id] = true
    for (var h = top_edge; h < top_edge + tall; h++) {
      for (var w = left_edge; w < left_edge + wide; w++) {
        if (!square[h]) {
          // didnt overlap
          square[h] = {}
          square[h][w] = id
        } else if (square[h] && !square[h][w]) {
          // didnt overlap
          square[h][w] = id
        } else {
          possible_ids[id] = false
          possible_ids[square[h][w]] = false
        }
      }
    }
  }

  return Object.keys(possible_ids).reduce((winner, key) => ( possible_ids[key] ? key : winner ), 0)
}

// console.log('answer 1: ', part1())
console.log('answer 2: ', part2())
