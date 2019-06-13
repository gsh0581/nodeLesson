const fs = require('fs')
const readStream = fs.createReadStream('./greeening.log')
const writeStream = fs.createWriteStream('./log-2.log');
readStream.pipe(writeStream);
