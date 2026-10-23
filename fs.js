
const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello Node.js!');

const data = fs.readFileSync('demo.txt', 'utf8');

console.log("File Content:", data);
