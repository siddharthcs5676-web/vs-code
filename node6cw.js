
// usercheck.js

const fs = require("fs");

// Create and write into user.txt
fs.writeFileSync("user.txt", "Welcome John");

console.log("File created and message stored.");

// Function to check username
function checkUser(content) {
    // Extract name from file content
    const name = content.split(" ")[1];

    if (name === "John") {
        console.log("Valid User");
    } else {
        console.log("Unknown User");
    }
}

// Read file content
fs.readFile("user.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("File Content:", data);

    // Call function to verify user
    checkUser(data);
});