const http = require("http");

// Create server
const server = http.createServer((req, res) => {

    // Print requested URL and method in terminal
    console.log("URL:", req.url);
    console.log("Method:", req.method);

    // Home page
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to ABC College!");
    }

    // About page
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About ABC College</h1>");
    }

    // 404 Page
    else {
        res.statusCode = 404;
        res.statusMessage = "Not Found";
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not found");
    }
});

// Run server on port 8080
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});