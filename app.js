const express = require("express");
const cors = require("cors");
const db = require('./db/db.js')
const {readdirSync} = require('fs')

const app = express();

const dotenv = require("dotenv").config()
db()
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.get('/', (req, res) => {
    res.send('Hello World')
})

const server = () => {
    // db()
    app.listen(PORT, () => {
        console.log('Server running at port:', PORT)
    })
}

server()