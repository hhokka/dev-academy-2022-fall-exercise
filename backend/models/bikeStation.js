const mongoose = require('mongoose')

const schema = mongoose.Schema({
  FID: {
    type: String,
    required: true
  },
  ID: {
    type: String,
    required: true
  },
  Nimi: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Osoite: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: true
  },
  Kaupunki: {
    type: String,
    required: true
  },
  Stad: {
    type: String,
    required: true
  },
  Operaattor: {
    type: String,
    required: true
  },
  Kapasiteet: {
    type: String,
    required: true
  },
  x: {
    type: String,
    required: true
  },
  y: {
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

module.exports = mongoose.model('BikeStation', schema)