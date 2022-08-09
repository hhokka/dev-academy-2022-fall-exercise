const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

const journeysRouter = require('./controllers/journeys')
const bikeStationsRouter = require('./controllers/bikeStations')
const { errorHandler } = require('./utils/middleware')
const logger = require('./utils/logger')
const validator = require('./utils/validator')
const loader = require('./utils/loader')
const BikeStation = require('./models/bikeStation')
const Journey = require('./models/journey')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/journeys', journeysRouter)
app.use('/api/bikeStations', bikeStationsRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

const validateAndLoad = async () => {
  await BikeStation.deleteMany({})
  await Journey.deleteMany({})
  const validateJourneys1 = await validator.runJourneyValidation('./data/2021-05.csv')
  const validateJourneys2 = await validator.runJourneyValidation('./data/2021-06.csv')
  const validateJourneys3 = await validator.runJourneyValidation('./data/2021-07.csv')
  const validateBikeStations1 = await validator.runBikeStationValidation('./data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv')

  await loader.loadJourneys('./data/2021-05.csv')
  //await loader.loadJourneys('./data/2021-06.csv')
  //await loader.loadJourneys('./data/2021-07.csv')
  await loader.loadBikeStations('./data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv')

  // eslint-disable-next-line no-console
  console.log('First journey dataset validated: ', validateJourneys1)
  // eslint-disable-next-line no-console
  console.log('Second journey dataset validated: ', validateJourneys2)
  // eslint-disable-next-line no-console
  console.log('Third journey dataset validated: ', validateJourneys3)
  // eslint-disable-next-line no-console
  console.log('Bike Station dataset validated: ', validateBikeStations1)
}

validateAndLoad()

app.use(errorHandler)


module.exports = app