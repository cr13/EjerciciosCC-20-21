var express = require('express');
var app = express();

const { Etcd3 } = require('etcd3');
const client = new Etcd3();

// const port = 3002

async function showEnvironment() {
    const results = await client.getAll();
    console.log(`All Keys from etcd server `, results);
}

async function getPort() {
    const port = await client.get('pruebat6port');
    return port;
}


let port = process.env.port || 3320;

(async () => {
    await showEnvironment();
    port = await getPort();
})().then(() => {

    app.listen(port, function () {
        console.log(`Aplicación ejemplo, escuchando en http://localhost:${port}`);
    });

})




