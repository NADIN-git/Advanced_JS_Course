const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());


app.get('/itemslist/:page', (req, res) => {
    const page = req.params.page;
    console.log(page);
    fs.readFile(`./public/database/items${page}.json`, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/itemslist', (req, res) => {
    const offset = 6;
    const filePath = './public/database/items3.json';

    fs.readFile(filePath, 'utf8', (err, data) => {
        console.log(req.body);
        const list = JSON.parse(data || '{}');
        const amountOfData = Object.keys(list).length;
        const newID = offset + amountOfData + 1;
        const newItrem = req.body;
        newItrem.id = newID;
        list[newID] = newItrem;
        fs.writeFile(filePath, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(list);
        })
    })
});

app.listen(3000, () => {
    console.log("Сервер запущен");
})