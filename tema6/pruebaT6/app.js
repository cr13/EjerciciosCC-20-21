var express = require('express');
var app = express();
const morgan = require('morgan');
const cars = require('./data/data_coches.json');

const { Etcd3 } = require('etcd3');
const client = new Etcd3();

// Settings
let port = process.env.port || 3320;
app.set('json spaces', 2);


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.get("/cars", (req, res) => {
    res.json(cars);
});


async function showEnvironment() {
    const results = await client.getAll();
    console.log(`All Keys from etcd server `, results);
}

async function getPort() {
    const port = await client.get('pruebat6port');
    return port;
}


(async () => {
    await showEnvironment();
    port = await getPort();
})().then(() => {

    app.listen(port, function () {
        console.log(`Aplicación ejemplo, escuchando en http://localhost:${port}/cars`);
    });

})




