const fs = require('fs')
const csv = require('@fast-csv/parse')
const Journey = require('../models/journey')
const BikeStation = require('../models/bikeStation')

const addJourney = async (data) => {
  if (data['Duration (sec.)'] >= 10 || data['Covered distance (m)'] >= 10){
    const journey = new Journey({
      ...data
    })
    // eslint-disable-next-line no-unused-vars
    const savedJourney = await journey.save()

    // Enable this to see when a journey is saved to database
    //eslint-disable-next-line no-console
    //console.log('savedJourney: ', savedJourney)

  }
}

const addBikeStations = async (data) => {
  const bikeStations = new BikeStation({ ...data })
  // eslint-disable-next-line no-unused-vars
  const savedBikeStation = await bikeStations.save()
  // Enable this to see when a bike station is saved to database
  //eslint-disable-next-line no-console
  //console.log('savedBikeStation: ', savedBikeStation)

}
async function loadJourneys (fileName) {
  return new Promise((resolve, reject) => {
    let filePath = fileName
    let numConcurrent = 0
    let paused = false
    const maxConcurrent = 10
    let stream = fs.createReadStream(fileName)
      .on('error', (err) => {
        // eslint-disable-next-line no-console
        console.log('error processing csv')
        reject(err)

      })
      .pipe(csv.parse({ headers: true }))
      .on('data', (row) => {

        function checkResume() {
          --numConcurrent
          if (paused && numConcurrent < maxConcurrent) {
            paused = false
            stream.resume()
          }
        }
        ++numConcurrent
        addJourney(row).then(checkResume, checkResume)
        if (numConcurrent >= maxConcurrent) {
          stream.pause()
          paused = true
        }
      })
      .on('end', () => {

        // eslint-disable-next-line no-console
        console.log('Data loaded to database')
        resolve(filePath)
      })
  })
}

const loadBikeStations = (fileName) => {
  fs.createReadStream(fileName)
    .pipe(csv.parse({ headers: true }))
    .on('data', (data) => {
      addBikeStations(data)
    })
}

module.exports = { loadJourneys, loadBikeStations }