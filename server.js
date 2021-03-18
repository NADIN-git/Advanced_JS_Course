/*const http = require('http');
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

console.log(`Server started on port ${port}!`);*/
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/itemsList', (req, res) => {
    fs.readFile('./public/database/items1.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log("Сервер запущен");
})