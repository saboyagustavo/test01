const express = require('express');
const validaNumero = require('./function');
// const path = require('http://127.0.0.1:5500/?numeroDigitado=3');

const app = express();
app.get('/', function (req, res) {
    res.send(validaNumero);
});

app.listen(3000);
