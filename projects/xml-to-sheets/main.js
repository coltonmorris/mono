var fs = require('fs')
var xmldoc = require('xmldoc')
var GoogleSpreadsheet = require('google-spreadsheet')
var async = require('async')

var sheet_id = require('./mono/projects/xml-to-sheets/config.js')
var creds = require('./mono/projects/xml-to-sheets/service-account-creds.json')

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1mTVXpz53ecLVeSkFTSRPYV3MX7misxH1meDoi3E2_Ec');
var sheet;


var xml = fs.readFileSync( './projects/xml-to-sheets/input.xml', 'ascii', function(err, xml) {
  return xml
})

var document = new xmldoc.XmlDocument(xml)

// parse xml into an array
var rows = []
document.eachChild(function(file) {
  file.eachChild(function(thread) {
    row = {}
    thread.eachChild(function(message) {
      switch(message.name) {
        case 'date':
          row['epoch'] = message.val
          row['utc'] = new Date(parseInt(message.val))
          break
        default:
          row[message.name] = message.val
      }
    })
    rows.push(row)
  })
})


// save array into spreadsheet
var count = 0
async.series([
  function setAuth(step) {
    doc.useServiceAccountAuth(creds, step)
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: ' + info.title + ' by '+ info.author.email)
      sheet = info.worksheets[0]
      console.log('sheet rows: ', sheet.rowCount)
      step()
    })
  },
  function addRows(step) {
    // TODO do an async map so that each row is saved before starting another
    rows.map(function(row) {
      return new Promise(function(resolve, reject) {
        sheet.addRow(row, function(err, _row) {
          if (err == null) {
            console.log('something went wrong: ', row)
            reject(err)
          } else {
            count++
            resolve(_row)
          }
        })
      })
    })
  },
])

console.log('total rows: ', rows.length)
console.log('rows added: ', count)
