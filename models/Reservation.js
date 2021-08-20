const { Schema, model } = require("mongoose");
const reservationsSchema = new Schema({
    
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    priceDay: {
        type: String,
        required: true
    },
    totalDays: {
        type: String,
        required: true
    },
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tour: [{ type: Schema.Types.ObjectId, ref: "Tour" }],
    guide: String,
    totalPrice: {
        type: String,
        required: true
    },
    isPaid: Boolean
},  {
    timestamps: true
})


//MODELO
const Reservation = model('Reservation', reservationsSchema)

//EXPORTACION
module.exports = Reservation