const fs = require('fs');

fs.writeFileSync(
    'input.txt',
    'Hello! This is a demonstration of pipe() in Node.js.'
);

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File created and data copied successfully using pipe()!');
});