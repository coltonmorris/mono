var fs = require('fs')
var dateFns = require('date-fns')

// read input data
var data = fs.readFileSync( './input.txt', 'ascii', function(err, data) {
  return data
}).trim().split('\n')

function mode(array) {
  if(array.length == 0) {
    return null
  }

  var modeMap = {}
  var maxEl = array[0], maxCount = 1
  for(var i = 0; i < array.length; i++) {
    var el = array[i]
    if(modeMap[el] == null) {
      modeMap[el] = 1
    } else {
      modeMap[el]++  
    }

    if(modeMap[el] > maxCount) {
      maxEl = el
      maxCount = modeMap[el]
    }
  }
  return maxEl
}

function transformData(d) {
  return d.map((line) => ( { date: getDateObject(line), status: line.split('] ')[1] } ))
}

function getDateObject(a) {
  var years = parseInt(a.slice(1,5))
  var months = parseInt(a.split('-')[1])
  var days = parseInt(a.split('-')[2])
  var hours =  parseInt(a.split(' ')[1].slice(0, -1).split(':')[0])
  var minutes =  parseInt(a.split(' ')[1].slice(0, -1).split(':')[1])
  var seconds = 0
  var miliseconds = 0

  return new Date(years, months, days, hours, minutes, seconds, miliseconds)
}

function chronologicalOrderSort(lines) {
  return lines.sort((a, b) => {
    if (a.date < b.date) {
      return -1
    } else if (a.date > b.date) {
      return 1
    } else {
      return 1
    }
  })
}


function part1() {
// [1518-11-01 00:00] Guard #10 begins shift
// [1518-11-01 00:05] falls asleep
// [1518-11-01 00:25] wakes up
  data = transformData(data)
  data = chronologicalOrderSort(data)

  // add up guards sleeping times
  var guards = {}
  var currGuardId
  var currAsleep
  var count
  data.map((line) => {
    var firstWord = line.status.split(' ')[0]
    switch(firstWord) {
      case 'Guard':
        currGuardId = line.status.split(' ')[1].slice(1)
        break
      case 'falls':
        currAsleep = line.date.getMinutes()
        break
      case 'wakes':
        if (!guards[currGuardId]) {
          guards[currGuardId] = line.date.getMinutes() - currAsleep
        } else {
          guards[currGuardId] += line.date.getMinutes() - currAsleep
        }
        break
      default:
        // do nothing
    }
  })

  // find guard asleep the longest
  var max = Math.max(...Object.values(guards))
  var sleepyGuardId = Object.keys(guards).reduce((foundId, key) => {
    if (guards[key] == max) {
      foundId = key
    }
    return foundId
  }, '')

  // find what minute does he spend asleep the most
  var sleepingMinutes = []
  var check
  data.map((line) => {
    var firstWord = line.status.split(' ')[0]
    switch(firstWord) {
      case 'Guard':
        var localGuardId = line.status.split(' ')[1].slice(1)
        if (localGuardId == sleepyGuardId) {
          check = true
        } else {
          // check until we get another guard
          check = false
        }
        break
      case 'falls':
        if (check) {
          currAsleep = line.date.getMinutes()
        }
        break
      case 'wakes':
        if (check) {
          var awake = line.date.getMinutes()
          for (var i = currAsleep; i < awake; i++) {
            sleepingMinutes.push(i)
          }
        }
        break
      default:
        // do nothing
    }
  })

  return mode(sleepingMinutes) * sleepyGuardId
}


function part2() {
  data = transformData(data)
  data = chronologicalOrderSort(data)

  // get list minutes asleep for each guard
  var guards = {}
  var currGuardId
  var currAsleep
  var count
  data.map((line) => {
    var firstWord = line.status.split(' ')[0]
    switch(firstWord) {
      case 'Guard':
        currGuardId = line.status.split(' ')[1].slice(1)
        break
      case 'falls':
        currAsleep = line.date.getMinutes()
        break
      case 'wakes':
        if (!guards[currGuardId]) {
          guards[currGuardId] = []
        }

        var awake = line.date.getMinutes()
        var sleepingMinutes = []
        for (var i = currAsleep; i < awake; i++) {
          guards[currGuardId].push(i)
        }
        break
      default:
        // do nothing
    }
  })

  // loop through each guard and find the most common number, and how many times that number appears
  Object.keys(guards).map((id) => {
    var minutes = guards[id]
    var counts = {}
    for (var i = 0; i < minutes.length; i++) {
      if (!counts[minutes[i]]) {
        counts[minutes[i]] = 1
      } else {
        counts[minutes[i]] += 1
      }
    }
    
    var mostFrequent
    var count = Object.keys(counts).reduce((largest, key) => {
      if (counts[key] > largest) {
        mostFrequent = parseInt(key)
        largest = counts[key]
      }
      return largest
  }, 0)


    guards[id] = { count: count, minute: mostFrequent }
  })

  var max = Math.max(...Object.values(guards).map((guard) => (guard.count)))
  var minute
  var sleepyGuardId = Object.keys(guards).reduce((foundId, key) => {
    if (guards[key].count == max) {
      minute = guards[key].minute
      foundId = key
    }
    return foundId
  }, '')

  return minute * sleepyGuardId
}

// console.log('answer 1: ', part1())
console.log('answer 2: ', part2())
