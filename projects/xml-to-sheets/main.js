var fs = require('fs')
var xmldoc = require('xmldoc')
var GoogleSpreadsheet = require('google-spreadsheet')
var async = require('async')
var Promise = require('bluebird')

var fields = ["type", "address", "body", "epoch", "utc", "read", "locked"]
var file = 'projects/xml-to-sheets/output.csv'



// read input data
var xml = fs.readFileSync( './projects/xml-to-sheets/input.xml', 'ascii', function(err, xml) {
  return xml
})
var document = new xmldoc.XmlDocument(xml)

// parse xml input into an array
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

// convert array into string
var stringify = fields.join(',') + '\n'
stringify += rows.map((row) => {
  return fields.map((field) => {
    switch(field) {
      case 'address':
        return row.address
      case 'body':
        return '\"' + row.body.replace(/\"/g, '\'') + '\"'
      case 'epoch':
        return row.epoch
      case 'utc':
        return row.utc
      case 'read':
        return row.read
      case 'type':
        return row.type
      case 'locked':
        return row.locked
    }
  }).join(',')
}).join('\n')


//save string into file
fs.writeFile(file, stringify, 'utf8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('It\'s saved!');
  }
});
