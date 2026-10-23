const fs = require('fs');
const zlib = require('zlib');

// Read the compressed file
const readStream = fs.createReadStream('input.txt.gz');

// Create the decompressed file
const writeStream = fs.createWriteStream('decompressed.txt');

// Create Gzip decompression stream
const gunzip = zlib.createGunzip();

// Decompress using pipe()
readStream.pipe(gunzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File decompressed successfully!');
});