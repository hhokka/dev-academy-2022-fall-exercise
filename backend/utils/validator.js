//const fs = require('fs')
//const csv = require('@fast-csv/parse')




/** csv file
name,phone,email,country
john,123a,john@ph.com,PH
doe,456,doe@us.com
*/

const csv = require('csv-validator')
const csvFilePath = './data/very-small-dataset.csv'
const headers = {
  Departure: '1', // any string
  Return: '',
  'Departure station id': '',
  'Departure station name': '',
  'Return station id': '',
  'Return station name': '',
  'Covered distance (m)': '',
  'Duration (sec.)': ''
}

const runValidation = () => {
  csv(csvFilePath, headers)
    .then(event => console.log('event: ', event))
    .catch(console.error) // [ 'Row 1: phone must be a type number', 'Row 2: country is required' ]
}
/* const runValidation = () => {
  let validated = 'true'
  fs.createReadStream('./data/very-small-dataset.csv')
    .pipe(csv.parse({ headers: true }))
    .validate(data => typeof data['Departure'] === 'string')
    .validate(data => typeof data['Return'] === 'string' )
    .validate(data => typeof data['Departure station id'] === 'string')
    .validate(data => typeof data['Departure station name'] === 'string')
    .validate(data => typeof data['Return station id'] === 'string')
    .validate(data => typeof data['Return station name'] === 'string')
    .validate(data => typeof data['Covered distance (m)'] === 'string')
    .validate(data => typeof data['Duration (sec.)'] === 'string')
    .on('error', error => console.error(error))
    .on('data', row => {
      console.log(`ROW=${JSON.stringify(row)}`)
      validated = 'valid'
    })
    .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
    .on('data-invalid', () => validated = 'invalid')
    .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`)
      console.log('validated: ', validated)
      return validated
    })
}
 */
module.exports = { runValidation }