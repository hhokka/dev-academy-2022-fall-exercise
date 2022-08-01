const mongoose = require('mongoose')

const schema = mongoose.Schema({
  departure: {
    type: Date,
    required: true
  },
  return: {
    type: Date,
    required: true
  },
  departureStationId: {
    type: Number,
    required: true
  },
  departureStationName: {
    type: String,
    required: true
  },
  returnStationId: {
    type: Number,
    required: true
  },
  returnStationName: {
    type: String,
    required: true
  },
  coveredDistance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
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