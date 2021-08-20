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
    // amenities: [{ type: Schema.Types.ObjectId, ref: "Amenity" }],
    picture1: String,
    picture2: String,
    picture3: String,
    picture4: String,
    country: String,
    area: String,
    stripeId: String

    // availability: HOW?
    },  {
    timestamps: true
    }
)

//MODELO
const Tour = model('Tour', toursSchema)

//EXPORTACION
module.exports = Tour