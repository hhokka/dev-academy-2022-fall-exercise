const mongoose = require('mongoose')

const schema = mongoose.Schema({
  departure: {
    type: Date
  },
  return: {
    type: Date
  },
  departureStationId: {
    type: Number
  },
  departureStationName: {
    type: String
  },
  returnStationId: {
    type: Number
  },
  returnStationName: {
    type: String
  },
  coveredDistance: {
    type: Number
  },
  duration: {
    type: Number
  }

})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Journey', schema)