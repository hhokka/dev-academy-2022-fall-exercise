const fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
  input: fs.createReadStream('./data/small-dataset.csv'),
  output: false,
  console: false
})

let journeys=[]

readInterface.on('line', function(line) {
  if(!line.includes('Departure,Return,')){
    load(line)
  }
})

const load = (line) => {
  journeys = line.split(',')
  console.log('load journeys: ', journeys)
}

exports.load = load