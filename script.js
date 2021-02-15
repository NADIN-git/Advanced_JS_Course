const http = require('http');
const fs = require('fs');
const path = require("path");

const server = http.createServer((req, res) => {

    let body = null;
    console.log(req.url)
    if (req.url !== "/favicon.ico") {
        body = fs.readFileSync(path.join('.', '/', 'public', req.url))
    }
    res.end(body);

});

server.listen(process.env.PORT || 3005);

console.log('Server started!')