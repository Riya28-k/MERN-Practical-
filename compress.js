const fs = require('fs');
const zlib = require('zlib');

// Read the input file
const readStream = fs.createReadStream('input.txt');

// Create the compressed file
const writeStream = fs.createWriteStream('input.txt.gz');

// Create Gzip compression stream
const gzip = zlib.createGzip();

// Compress using pipe()
readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File compressed successfully!');
});