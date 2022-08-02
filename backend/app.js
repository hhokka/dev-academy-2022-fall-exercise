const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

const journeysRouter = require('./controllers/journeys')
const { errorHandler } = require('./utils/middleware')
const logger = require('./utils/logger')
const validator = require('./utils/validator')
const loader = require('./utils/loader')

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

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

const validate = async() => {
  const validated = await validator.runValidation()
  console.log('validated app: ', validated)
}
validate()
loader.load()
//validate.runValidation2()
app.use(errorHandler)


module.exports = app