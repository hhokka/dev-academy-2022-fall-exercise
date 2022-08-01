const fs = require('fs')

try {
  const data = fs.readFileSync('./data/small-dataset.csv', 'utf8')
  console.log(data)
  const myArray = data.split(',')
  console.log(myArray[0])
} catch (err) {
  console.error(err)
}
