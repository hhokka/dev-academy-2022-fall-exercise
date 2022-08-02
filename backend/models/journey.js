const mongoose = require('mongoose')

const schema = mongoose.Schema({
  Departure: {
    type: String,
    required: true
  },
  Return: {
    type: String,
    required: true
  },
  'Departure station id': {
    type: String,
    required: true
  },
  'Departure station name': {
    type: String,
    required: true
  },
  'Return station id': {
    type: String,
    required: true
  },
  'Return station name': {
    type: String,
    required: true
  },
  'Covered distance (m)': {
    type: String,
    required: true
  },
  'Duration (sec.)': {
    type: String,
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