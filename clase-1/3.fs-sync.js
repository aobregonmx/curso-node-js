const fs = require("node:fs");

console.log("🐼 Reading the first file...");
const text = fs.readFileSync("./archivo1.txt", "utf-8");
console.log("1st text:", text);

console.log("\n😀 Do things while reading the file...\n");

console.log("🦄 Reading the second file...");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("2nd text:", secondText);
