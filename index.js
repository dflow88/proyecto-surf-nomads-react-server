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
app.use('/api/amenities', require('./routes/amenities'))
app.use('/api/tours', require('./routes/tours'))
app.use('/api/reservations', require('./routes/reservations'))

app.get("/", (req,res) => {
    res.send("Proyect Surf Nomada Active")
})


//SERVIDOR
app.listen(process.env.PORT, () => {
    console.log("Connected to the server")
})