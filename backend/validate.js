const fs = require('fs')
const csv = require('@fast-csv/parse')





const runValidation = () => {
  fs.createReadStream('./data/very-small-dataset.csv')
    .pipe(csv.parse({ headers: true }))
    .validate(data => data.Departure === '2021-05-31T23:57:25')
    .on('error', error => console.error(error))
    .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
    .on('data-invalid', (row, rowNumber) => console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`))
}

module.exports = { runValidation }