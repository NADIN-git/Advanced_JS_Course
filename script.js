const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let body = null;
    if (req.url === "/style.css") {
        body = fs.readFileSync('./public/style.css', 'utf8')
    } else if (req.url === "/index.html") {
        body = fs.readFileSync('./public/index.html', 'utf8')
    } else if (req.url === "/img/IMG_7600.jpg") {
        body = fs.readFileSync('./public/img/IMG_7600.jpg')
    } else if (req.url === "/guess.html") {
        body = fs.readFileSync('./public/guess.html', 'utf8')
    } else if (req.url === "/puzzle.html") {
        body = fs.readFileSync('./public/puzzle.html', 'utf8')
    } else {
        body = fs.readFileSync('./public/genpasw.html', 'utf8')
    }
    res.end(body)
});

server.listen(process.env.PORT || 3000);

console.log('Server started!')