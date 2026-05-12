// buffer.js

// Step 1: Create buffer
const messageBuffer = Buffer.from("NodeJS is fast");

// Step 2: Slice buffer to get "NodeJS"
const nodeBuffer = messageBuffer.slice(0, 6);

console.log("Extracted Word:", nodeBuffer.toString());

// Step 3: Create another buffer
const powerfulBuffer = Buffer.from("Powerful");

// Step 4: Compare buffers
const result = Buffer.compare(nodeBuffer, powerfulBuffer);

if (result < 0) {
    console.log("NodeJS comes first alphabetically");
} else if (result > 0) {
    console.log("Powerful comes first alphabetically");
} else {
    console.log("Both are equal");
}

// Step 5: Convert buffer to JSON
const jsonData = nodeBuffer.toJSON();

console.log("JSON Output:", jsonData);