const fs = require('fs')

fs.appendFile('./mydir/test.txt', "\nåååå", (err) => {
  console.log(err);
})

