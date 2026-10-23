const fs = require("fs");

// Create Directory
fs.mkdirSync("myfolder");
console.log("Directory created successfully.");

// Rename Directory
fs.renameSync("myfolder", "newfolder");
console.log("Directory renamed successfully.");

// Remove Directory
fs.rmdirSync("newfolder");
console.log("Directory removed successfully.");