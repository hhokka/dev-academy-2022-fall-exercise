const router = require('express').Router()

const BikeStation = require('../models/bikeStation')

router.get('/', async (request, response) => {
  const bikeStation = await BikeStation
    .find({})
  response.json(bikeStation)
})

router.post('/', async (request, response) => {
  const bikeStation = new BikeStation({ ...request.body })

  const savedBikeStation = await bikeStation.save()

  response.status(201).json(savedBikeStation)
})

router.post('/reset', async (request, response) => {
  await BikeStation.deleteMany({})

  response.status(204).end()
})
module.exports = router