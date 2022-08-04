const fs = require('fs')
const csv = require('@fast-csv/parse')
const Journey = require('../models/journey')

const addJourney = async (data) => {
  if (data['Duration (sec.)'] >= 10 || data['Covered distance (m)'] >= 10){
    const journey = new Journey({
      ...data
    })
    const savedJourney = await journey.save()
    console.log('savedJourney: ', savedJourney)

  }
}
const load = () => {
  fs.createReadStream('./data/very-small-dataset-modified.csv')
    .pipe(csv.parse({ headers: true }))
    .on('data', (data) => {
      addJourney(data)
    })
}
module.exports = { load }