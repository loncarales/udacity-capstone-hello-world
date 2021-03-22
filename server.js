const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    req.is('text/html')
    res.send('Hello World, my name is Aleš.')
})

module.exports =  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
