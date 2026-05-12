// mergeFiles.js

const fs = require('fs');

const introStream = fs.createReadStream('intro.txt');
const conclusionStream = fs.createReadStream('conclusion.txt');

const chunks = [];


introStream.on('data', (chunk) => {
    chunks.push(chunk);
});

// After intro.txt is done, read conclusion.txt
introStream.on('end', () => {

    conclusionStream.on('data', (chunk) => {
        chunks.push(chunk);
    });

    conclusionStream.on('end', () => {

        // Combine all buffers
        const finalContent = Buffer.concat(chunks);

        // Create writable stream
        const writeStream = fs.createWriteStream('full_report.txt');

        // Write merged content
        writeStream.write(finalContent);

        // End stream
        writeStream.end();

        writeStream.on('finish', () => {
            console.log('Merging complete!');
        });
    });

});

// Handle errors
introStream.on('error', (err) => {
    console.error('Error reading intro.txt:', err);
});

conclusionStream.on('error', (err) => {
    console.error('Error reading conclusion.txt:', err);
});