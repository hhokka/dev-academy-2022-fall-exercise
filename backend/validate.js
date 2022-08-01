/** csv file
 name,phone,email,country
 john,123a,john@ph.com,PH
 doe,456,doe@us.com
 */

const csv = require('csv-validator')
const csvFilePath = './data/small-dataset.csv'
const headers = {
  Departure: '', // any string
  phone: 1, // any number
  // eslint-disable-next-line no-useless-escape
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  country: '' // add '_' as first character of the key to indicate as optional
}


const runValidation = () => {
  console.log('test here')
  csv(csvFilePath, headers)
    .then(console.log('inside csv-validator'))
    .then(console.log)
    .catch(console.error) // [ 'Row 1: phone must be a type number', 'Row 2: country is required' ]

}
module.exports = { runValidation }