const fs = require('fs')
const csv = require('@fast-csv/parse')

const result = []

const load = () => {
  fs.createReadStream('./data/very-small-dataset.csv')
    .pipe(csv.parse({ headers: true }))
    .on('data', (data) => {
      result.push(data)
    })
    .on('end', () => {
      console.log(result)
    })
}
module.exports = { load }