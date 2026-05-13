const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

// Create event emitter
const eventEmitter = new EventEmitter();

// Event listener
eventEmitter.on("pageLoaded", (pageName) => {
    console.log(`${pageName} page was viewed`);
});

// Create server
const server = http.createServer((req, res) => {

    let fileName = "";

    // Route handling
    if (req.url === "/home") {
        fileName = "home.html";
    }
    else if (req.url === "/services") {
        fileName = "services.html";
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
    }

    // Read and serve HTML file
    fs.readFile(fileName, (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page not found");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);

            // Emit custom event
            eventEmitter.emit("pageLoaded", fileName);
        }
    });
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});