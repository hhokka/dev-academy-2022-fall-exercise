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
    required: false
  },
  'Duration (sec.)': {
    type: String,
    required: true
  }

})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.departure = returnedObject.Departure.toString()
    returnedObject.return = returnedObject.Return.toString()
    returnedObject.departureStationId = returnedObject['Departure station id'].toString()

    returnedObject.departureStationId = returnedObject['Departure station id'].toString()
    returnedObject.departureStationName = returnedObject['Departure station name'].toString()
    returnedObject.returnStationId = returnedObject['Return station id'].toString()
    returnedObject.returnStationName = returnedObject['Return station name'].toString()
    returnedObject.coveredDistance = returnedObject['Covered distance (m)'].toString()
    returnedObject.duration = returnedObject['Duration (sec'][')'].toString()

    delete returnedObject.Departure
    delete returnedObject.Return
    delete returnedObject['Departure station id']
    delete returnedObject['Departure station name']
    delete returnedObject['Return station id']
    delete returnedObject['Return station name']
    delete returnedObject['Covered distance (m)']
    delete returnedObject['Duration (sec']

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Journey', schema)