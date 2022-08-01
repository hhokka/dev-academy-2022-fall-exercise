const fs = require('fs');

try {
    const data = fs.readFileSync('./data/small-dataset.csv', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
