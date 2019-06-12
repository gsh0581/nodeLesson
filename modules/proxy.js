const http = require('http');
require('colors')
const https = require('https');
const server = https.createServer((req, res) => {
    https.get('', (request) => {
        let data = '';
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on('end', () => {
            res.setHeader('Content-Type','application/json;;charset=utf8')
            res.write(data)
            res.end();
        })
    })
})
server.listen(8000, () => {
    console.log("listen 8000....".green)
})