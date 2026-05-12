// bufferTask.js

const fs = require('fs');
const path = require('path');

// Step 1: Create buffer
let buffer1 = Buffer.from("Node.js buffers are powerful");

// Step 2: Write "FAST " at beginning
buffer1.write("FAST ", 0);

// Step 3: Create another buffer
const buffer2 = Buffer.from(" and flexible!");

// Step 4: Combine both buffers
const finalBuffer = Buffer.concat([buffer1, buffer2]);

// Step 5: Convert buffer to string
const finalText = finalBuffer.toString();

// Step 6: Create full file path
const filePath = path.join(__dirname, 'buffer_output.txt');

// Step 7: Save to txt file
fs.writeFileSync(filePath, finalText);

// Step 8: Print output
console.log("Final Text:");
console.log(finalText);

console.log("\nFile saved at:");
console.log(filePath);