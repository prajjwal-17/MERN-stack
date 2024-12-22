// Promisified setTimeout
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Promisified fetch (Node.js example)
const fetch = require('node-fetch');

function fetchWithPromise(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}

// Promisified fs.readFile
const fs = require('fs').promises;

function readFileWithPromise(path, encoding = 'utf-8') {
    return fs.readFile(path, encoding);
}

// Example usage
async function exampleUsage() {
    try {
        console.log('Starting delay...');
        await delay(1000);
        console.log('1 second passed');

        console.log('Fetching data...');
        const data = await fetchWithPromise('https://api.example.com/data');
        console.log('Fetched data:', data);

        console.log('Reading file...');
        const fileData = await readFileWithPromise('Week2/a.txt');
        console.log('File data:', fileData);

    } catch (err) {
        console.error('Error:', err);
    }
}

exampleUsage();
