/* const fs = require('fs')
const csvlint = require('csvlint')
const rs = fs.createReadStream('./data/very-small-dateset.csv')
const ws = fs.createWriteStream('./data/output.csv')
//csvlint = csvlint()
rs.pipe(csvlint).pipe(ws)
csvlint.on('readable', function() {
})

csvlint.on('data', function(data) {
  console.log(data)
})
 */
/* const fs = require('fs')
const csv = require('@fast-csv/parse')


 */

/** csv file
name,phone,email,country
john,123a,john@ph.com,PH
doe,456,doe@us.com
*/

const csv = require('csv-validator')
const csvFilePath = './data/very-small-dataset.csv'
const headers = {
  Departure: 1,
  Return: '',
  'Departure station id': '',
  'Departure station name': '',
  'Return station id': '',
  'Return station name': '',
  'Covered distance (m)': '',
  'Duration (sec.)': ''
}

const runValidation = () => {
  let validated = null
  csv(csvFilePath, headers)
    .then(event => {
      console.log('event: ', event)
      validated = 'true'
    })
    .catch(console.error)
  return (validated)
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
/* const runValidation = () => {
  console.log('inside validator')
} */
module.exports = { runValidation }