const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({

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
    picture: String
},  {
    timestamps: true
})

//MODELO
const User = mongoose.model('User', usersSchema)

//EXPORTACION
module.exports = User