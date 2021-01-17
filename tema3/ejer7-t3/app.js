const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Prueba para ejercicio 7!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
