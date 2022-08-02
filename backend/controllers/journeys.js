const router = require('express').Router()

const Journey = require('../models/journey')

router.get('/', async (request, response) => {
  const journeys = await Journey
    .find({})
  response.json(journeys)
})

router.post('/', async (request, response) => {
  console.log('request.body: ', request.body)
  //const journey = new Journey({ ...request.body })
  const journey = new Journey({ departure: 'hans hokka' })

  const savedJourney = await journey.save()

  response.status(201).json(savedJourney)
})

router.post('/reset', async (request, response) => {
  await Journey.deleteMany({})

  response.status(204).end()
})
module.exports = router