const fs = require('fs')
const csv = require('@fast-csv/parse')
const Journey = require('../models/journey')
const BikeStation = require('../models/bikeStation')

const addJourney = async (data) => {
  if (data['Duration (sec.)'] >= 10 || data['Covered distance (m)'] >= 10){
    const journey = new Journey({
      ...data
    })
    const savedJourney = await journey.save()
    console.log('savedJourney: ', savedJourney)

  }
}

const addBikeStations = async (data) => {
  const bikeStations = new BikeStation({ ...data })
  const savedBikeStation = await bikeStations.save()
  console.log('savedBikeStation: ', savedBikeStation)

}
const loadJourneys = (fileName) => {
  fs.createReadStream(fileName)
    .pipe(csv.parse({ headers: true }))
    .on('data', (data) => {
      addJourney(data)
    })
}

const loadBikeStations = (fileName) => {
  fs.createReadStream(fileName)
    .pipe(csv.parse({ headers: true }))
    .on('data', (data) => {
      //console.log('addBikeStations, data: ', data)
      addBikeStations(data)
    })
}

module.exports = { loadJourneys, loadBikeStations }