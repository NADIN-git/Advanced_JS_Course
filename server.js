const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let body = null
    try {
        body = fs.readFileSync(`./public${req.url}`)
    } catch (err) {
        body = fs.readFileSync(`./public/index.html`)
    }

    res.end(body)
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}!`);