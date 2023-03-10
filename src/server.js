const dotenv = require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`)
 })