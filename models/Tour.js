const { Schema, model } = require("mongoose");
const toursSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    guide: [{ type: Schema.Types.ObjectId, ref: "User" }],
    priceDay: {
        type: String,
        required: true
    },
    shortDescription: String,
    description: {
        type: String,
        required: true
    },
    amenities: [{ type: Schema.Types.ObjectId, ref: "Amenity" }],
    pictures: Array,
    country: String,
    area: String

    // availability: HOW?
    },  {
    timestamps: true
    }
)

//MODELO
const Tour = model('Tour', toursSchema)

//EXPORTACION
module.exports = Tour