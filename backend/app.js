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
//const loader = require('./utils/loader')

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
const journeyValidated = validator.runJourneyValidation('./data/very-small-dataset-modified.csv')
//validator.runJourneyValidation('./data/2021-05.csv')
//validator.runJourneyValidation('./data/2021-06.csv')
//validator.runJourneyValidation('./data/2021-07.csv')
//validator.runBikeStationValidation('./data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv')
const bikeStationValidated = validator.runBikeStationValidation('./data/small-bikeStationDataset.csv')
console.log('journeyValidated:  ', journeyValidated)
console.log('bikeStationValidated:  ', bikeStationValidated)
//loader.loadJourneys('./data/2021-05.csv')
//loader.loadJourneys('./data/2021-06.csv')
//loader.loadJourneys('./data/2021-07.csv')
//loader.loadJourneys('./data/small-dataset.csv')
//loader.loadJourneys('./data/very-small-dataset.csv')
//loader.loadBikeStations('./data/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv')

app.use(errorHandler)


module.exports = app