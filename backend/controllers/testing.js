const router = require('express').Router()
const Journey = require('../models/journey')

router.post('/reset', async (request, response) => {
  await Journey.deleteMany({})

  response.status(204).end()
})

module.exports = router