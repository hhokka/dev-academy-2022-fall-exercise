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
    console.log('savedJourney: ', savedJourney)

  }
}

const addBikeStations = async (data) => {
  const bikeStations = new BikeStation({ ...data })
  // eslint-disable-next-line no-unused-vars
  const savedBikeStation = await bikeStations.save()
  // Enable this to see when a bike station is saved to database
  //eslint-disable-next-line no-console
  console.log('savedBikeStation: ', savedBikeStation)

}

const loadJourneys = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(fileName)
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => reject(error))
      .on('data', (data) => {
        // eslint-disable-next-line no-console
        console.log(`DATA=${JSON.stringify(data)}`)
        addJourney(data)
      }
      )
      .on('data-invalid', (data) =>
        // eslint-disable-next-line no-console
        console.log(
          `Invalid [data=${data}] [data=${JSON.stringify(data)}]`
        )
      )
      //.on('data-invalid', (data) => (data = 'invalid'))
      .on('end', (data) => {
        // eslint-disable-next-line no-console
        console.log(`Got ${data} as data`)
        resolve(data)
      })
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