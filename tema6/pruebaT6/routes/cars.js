
const { Router } = require('express');
const router = Router();
const cars = require("../data/data_coches.json");

router.get("/cars", (req, res) => {
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(cars);
});

router.get("/cars/:id", (req, res) => {
 
    if (cars.coches.hasOwnProperty(req.params.id)){
        res.status(200);
        res.header("Content-Type", "application/json");
        res.json(cars.coches[req.params.id]);
    } else {
        res.status(400).send("No existe ese coche");;
    }
});

router.post("/cars/:id/:marca/:modelos", (req, res) => {

    let id = cars.coches.push({
        id: req.params.id,
        marca: req.params.marca,
        modelos: req.params.modelos
    });
    res.status(200);
    res.send({
        coches: cars.coches[id - 1],
        message: "Coche POST ok",
    });
});

module.exports = router;