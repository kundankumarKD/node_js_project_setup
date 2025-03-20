const express = require('express')
const app = express()

const indexRoute = require('./routes/index.js').Router
const PORT = 9000

const bodyParser = require('body-parser')
app.use(express.static('views'));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use('/', indexRoute)
app.listen(PORT, async()=>{
    console.log("Server in running on PORT", PORT)
})