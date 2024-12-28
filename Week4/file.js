const fs = require('fs');
const path = require('path');

console.log(__dirname);
const filePath = path.join(__dirname,'sample.txt');
console.log(filePath);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);

  }
});