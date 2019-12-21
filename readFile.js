const fs = require('fs');

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, contents) => {
    if(err) {
      reject(err);
    } else {
      resolve(contents);
    }
  })
});



console.log(1);

console.log(2);

console.log(3);