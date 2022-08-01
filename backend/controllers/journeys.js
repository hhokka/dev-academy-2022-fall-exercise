const router = require('express').Router()

const Journey = require('../models/journey')

router.get('/', async (request, response) => {
  const journeys = await Journey
    .find({})
  response.json(journeys)
})

module.exports = router