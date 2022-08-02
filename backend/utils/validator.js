const fs = require('fs')
const csv = require('@fast-csv/parse')





const runValidation = () => {
  let validated = ''
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
    .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
    .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
    .on('data-invalid', () => validated = 'invalid')
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`))
  return validated
}

module.exports = { runValidation }