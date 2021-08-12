//IMPORTS
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db')

const app = express()



//MIDDLEWARES
require('dotenv').config()

connectDB()

app.use(cors())

app.use(express.json({extended: true}))

//ROUTES

app.use("/api/auth", require('./routes/auth'))
app.use("/api/users", require('./routes/users'))

app.get("/", (req,res) => {
})


//SERVIDOR
app.listen(process.env.PORT, () => {
    console.log("Connected to the server")
})