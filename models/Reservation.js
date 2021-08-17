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
    email: [{ type: Schema.Types.ObjectId, ref: "User" }],
    name: [{ type: Schema.Types.ObjectId, ref: "User" }],
    lastName: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tourName: [{ type: Schema.Types.ObjectId, ref: "Tour" }],
    totalPrice: String
},  {
    timestamps: true
})


//MODELO
const Reservation = model('Reservation', reservationsSchema)

//EXPORTACION
module.exports = Reservation