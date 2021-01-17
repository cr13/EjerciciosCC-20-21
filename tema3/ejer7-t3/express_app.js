var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hola Mundo!');
});

app.listen(3002, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3002!');
});