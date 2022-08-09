const mongoose = require('mongoose')

const schema = mongoose.Schema({
  FID: {
    type: String,
  },
  ID: {
    type: String
  },
  Nimi: {
    type: String
  },
  Name: {
    type: String,
  },
  Osoite: {
    type: String,
  },
  Adress: {
    type: String,
  },
  Kaupunki: {
    type: String,
  },
  Stad: {
    type: String,
  },
  Operaattor: {
    type: String,
  },
  Kapasiteet: {
    type: String,
  },
  x: {
    type: String,
  },
  y: {
    type: String,
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