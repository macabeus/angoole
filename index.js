const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

require('./routes/webhook')(app)

app.listen(80)
