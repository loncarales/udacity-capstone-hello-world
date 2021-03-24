const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    req.is('text/html')
    res.send('<span style="color:green">Hello World, My name is Aleš. I am now Green.<span>')
})

module.exports =  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
