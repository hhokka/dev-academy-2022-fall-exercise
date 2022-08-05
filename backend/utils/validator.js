const fs = require('fs')
const csv = require('@fast-csv/parse')

const runJourneyValidation = (fileName) => {
  return new Promise((resolve, reject) => {
    let validated = ''
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
      .on('error', (error) => reject(error))
      .on('data', row => {
        // eslint-disable-next-line no-console
        console.log(`ROW=${JSON.stringify(row)}`)
        if (validated !== 'invalid'){
          validated = 'valid'

        }
      })
      // eslint-disable-next-line no-console
      .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
      .on('data-invalid', () => validated = 'invalid')
      .on('end', rowCount => {
        // eslint-disable-next-line no-console
        console.log(`Parsed ${rowCount} rows`)
        resolve(validated)

      })
  })
}

const runBikeStationValidation = (fileName) => {
  return new Promise((resolve, reject) => {
    let validated = ''
    fs.createReadStream(fileName)
      .pipe(csv.parse({ headers: true }))
      .validate((data) => data['FID'] !== '')
      .validate((data) => data['ID'] !== '')
      .validate((data) => data['Name'] !== '')
      .validate((data) => data['Osoite'] !== '')
      .validate((data) => data['Adress'] !== '')
      .validate((data) => data['Kaupunki'] !== '')
      .validate((data) => data['Stad'] !== '')
      .validate((data) => data['Operaattor'] !== '')
      .validate((data) => data['Kapasiteet'] !== '')
      .validate((data) => data['x'] !== '')
      .validate((data) => data['y'] !== '')
      .on('error', (error) => reject(error))
      .on('data', (row) => {
        // eslint-disable-next-line no-console
        console.log(`ROW=${JSON.stringify(row)}`)
        if (validated !== 'invalid') {
          validated = 'valid'
        }
      })
      .on('data-invalid', (row, rowNumber) =>
      // eslint-disable-next-line no-console
        console.log(
          `Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`
        )
      )
      .on('data-invalid', () => (validated = 'invalid'))
      .on('end', (rowCount) => {
        // eslint-disable-next-line no-console
        console.log(`Parsed ${rowCount} rows`)
        resolve(validated)
      })
  })
}

/* const runValidation = () => {
  console.log('inside validator')
} */
module.exports = { runJourneyValidation, runBikeStationValidation }