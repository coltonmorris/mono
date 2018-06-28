// Run this file if you want to steal data from a nice lady who put together a wholesome service of gathering words for games. You. Monster.

const axios = require('axios')
const Papa = require('papaparse')
const fs = require('fs')
const firstline = require('firstline')


const games = {
  "Subjects": 1,
  "Pictionary": 2,
  "Catchphrase": 3,
  "Holidays": 4,
  "Charades": 5,
  "Get": 6,
  "Wordplay": 7,
  "Movies": 8,
  "Individuals": 9,
}

const difficulties = {
  "Easy": 6,
  "Medium": 7,
  "Hard": 8,
  "Really Hard": 9,
}

// get all the really hard ones, then parse and make sure no duplicates
var difficulty = difficulties["Easy"]
var category = "none"
var fields = ['word', 'difficulty', 'category']
var count = 0

function getWords() {
  axios.get('https://www.thegamegal.com/wordgenerator/generator.php', {
    params: {
      game: games["Catchphrase"],
      category: difficulty,
    }
  })
  .then(function (response) {
    if (!response.data.success) {
      throw Error('Request did not work')
    }

    response.data.words.map((word) => {
      let csv = Papa.unparse({
        fields: ['word', 'difficulty', 'category'],
        data: [word, difficulty, category]
      })
      firstline('./data.csv')
        .catch((error) => {
          console.log('file does not exist')
          // file probably doesn't exist
          throw error
        })

      // remove first line, add a new line
      l = csv.split('\n').splice(1)[0] + '\n'
      fs.appendFile('data.csv', l, function (err) {
        if (err) throw err;
        console.log('count: ', count)
        count++
        getWords()
      })
    })
  })
  .catch(function (error) {
    console.log(error)
  })
}

// recursively get words
getWords()
