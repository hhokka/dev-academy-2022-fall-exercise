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
const fs = require('fs')
const csv = require('@fast-csv/parse')
let journeyValidated = ''
/** csv file
name,phone,email,country
john,123a,john@ph.com,PH
doe,456,doe@us.com
*/

/* const csv = require('csv-validator')
const headers = {
  // eslint-disable-next-line no-useless-escape
  Departure: '^\S+$',
  Return: '',
  'Departure station id': '',
  'Departure station name': '',
  'Return station id': '',
  'Return station name': '',
  'Covered distance (m)': '',
  'Duration (sec.)': ''
}
 */
/* const runValidation = (fileName) => {
  let validated = null
  csv(fileName, headers)
    .then(event => {
      console.log('event: ', event)
      validated = 'true'
    })
    .catch(console.error)
  return (validated)
} */
const runJourneyValidation = (fileName) => {
  let validated = 'true'
  fs.createReadStream(fileName)
    .pipe(csv.parse({ headers: true }))
    .validate(data => data['Departure'] !== '')
    .validate(data => data['Return'] !== '')
    .validate(data => data['Departure station id'] !== '')
    .validate(data => data['Departure station name'] !== '')
    .validate(data => data['Return station id'] !== '')
    .validate(data => data['Return station name'] !== '')
    .validate(data => data['Covered distance (m)'] !== '')
    .validate(data => data['Duration (sec.)'] !== '')
    .on('error', error => console.error(error))
    .on('data', row => {
      console.log(`ROW=${JSON.stringify(row)}`)
      if (validated !== 'invalid'){
        validated = 'valid'

      }
    })
    .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
    .on('data-invalid', () => validated = 'invalid')
    .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`)

      console.log('Journeys validated: ', validated)
      journeyValidated = validated
      return validated

    })

}

const runBikeStationValidation = (fileName) => {
  let validated = 'true'
  fs.createReadStream(fileName)
    .pipe(csv.parse({ headers: true }))
    .validate(data => data['FID'] !== '')
    .validate(data => data['ID'] !== '')
    .validate(data => data['Name'] !== '')
    .validate(data => data['Osoite'] !== '')
    .validate(data => data['Adress'] !== '')
    .validate(data => data['Kaupunki'] !== '')
    .validate(data => data['Stad'] !== '')
    .validate(data => data['Operaattor'] !== '')
    .validate(data => data['Kapasiteet'] !== '')
    .validate(data => data['x'] !== '')
    .validate(data => data['y'] !== '')
    .on('error', error => console.error(error))
    .on('data', row => {
      console.log(`ROW=${JSON.stringify(row)}`)
      if (validated !== 'invalid'){
        validated = 'valid'

      }
    })
    .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
    .on('data-invalid', () => validated = 'invalid')
    .on('end', rowCount => {
      console.log(`Parsed ${rowCount} rows`)
      console.log('Journeys validated:', journeyValidated)
      console.log('Bike stations validated: ', validated)

      return validated

    })

}

/* const runValidation = () => {
  console.log('inside validator')
} */
module.exports = { runJourneyValidation, runBikeStationValidation }