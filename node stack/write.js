const fs = require("fs");

// Read data from file
let data = fs.readFileSync("data.txt", "utf8");

console.log("Data read from file:");
console.log(data);

// Convert data into stack
let stack = data.trim().split(/\r?\n/);

console.log("Stack:", stack);

// Push operation
stack.push("40");

console.log("After Push:", stack);

// Pop operation
let removed = stack.pop();

console.log("Removed element:", removed);

console.log("After Pop:", stack);

// Write updated stack to file
fs.writeFileSync("data.txt", stack.join("\n"));

console.log("Stack saved to file successfully.");d