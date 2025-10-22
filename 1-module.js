const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello, World!');
    }
    else {
        res.end('Not Found');
    }
})

server.listen(5000);