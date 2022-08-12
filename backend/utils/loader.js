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

async function processCSV (jobName, fileName) {
  return new Promise((resolve, reject) => {
    let filePath = fileName
    let numConcurrent = 0
    let paused = false
    const maxConcurrent = 10
    let stream = fs.createReadStream(filePath)
      .on('error', (err) => {
        // handle error
        console.log('error processing csv')
        reject(err)

      })
      .pipe(csv())
      .on('data', (row) => {

        function checkResume() {
          --numConcurrent
          if (paused && numConcurrent < maxConcurrent) {
            // restart the stream, there's room for more
            paused = false
            stream.resume()
          }
        }
        ++numConcurrent
        createJob(jobName, row).then(checkResume, checkResume)
        if (numConcurrent >= maxConcurrent) {
          // pause the stream because we have max number of operations going
          stream.pause()
          paused = true
        }
      })
      .on('end', () => {
        // handle end of CSV
        console.log('Finished processing csv')
        resolve(filePath)
      })
  })
}


async function createJob (name, data) {
  let { hostname, port, ip } = data
  let protocol = 'https'
  if (port === 80) {
    protocol = 'http'
  }
  let url = protocol + '://' + hostname
  try {
    await tls.getHostData(url) // call an external api to get details of hostname
    return url
  } catch (error) {
    // make sure returned promise is rejected
    throw error
  }
}

async function createJob (name, data) {
  let { hostname, port, ip } = data
  let protocol = 'https'
  if (port === 80) {
    protocol = 'http'
  }
  let url = protocol + '://' + hostname
  addJourney
  return url
}
/* const loadJourneys = (fileName) => {
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
} */

module.exports = { processCSV }