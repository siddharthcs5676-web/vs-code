// profile.js

const fs = require("fs");

// Step 1: Create profile.txt with content
const profileData = "Name: Riya\nAge: 22\nCity: Mumbai";

fs.writeFileSync("profile.txt", profileData);

console.log("profile.txt created successfully");

// Step 2: Read file content
fs.readFile("profile.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("\nFile Content:\n");
    console.log(data);

    // Step 3: Extract only the name using string methods
    const lines = data.split("\n");
    const name = lines[0].split(": ")[1];

    console.log("\nExtracted Name:", name);

    // Function to verify profile
    function verifyProfile(username) {
        if (username === "Riya") {
            console.log("Profile verified");
        } else {
            console.log("Invalid profile");
        }
    }

    // Call function
    verifyProfile(name);

    // Step 4: Update file with Status: Active
    fs.appendFileSync("profile.txt", "\nStatus: Active");

    console.log("\nStatus added to file");

    // Step 5: Rename file
    fs.renameSync("profile.txt", "verified_profile.txt");

    console.log("File renamed to verified_profile.txt");
});