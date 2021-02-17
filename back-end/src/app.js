const express = require('express');
const validaNumero = require('./function');
const path = require('https://http://127.0.0.1:5500');

const app = express();
app.get('/', function (req, res) {
    res.send(validaNumero());
});

app.listen(3000);
