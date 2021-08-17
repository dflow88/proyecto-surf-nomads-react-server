const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    experienceYrs: String,
    city: String,
    description: String,
    picture: String
},  {
    timestamps: true
})

//MODELO
const User = mongoose.model('User', usersSchema)

//EXPORTACION
module.exports = User