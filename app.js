const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const server = () => {
    app.listen(PORT, () => {
        console.log('Server running at port:', PORT)
    })
}

server()