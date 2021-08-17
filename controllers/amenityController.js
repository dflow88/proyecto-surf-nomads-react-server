const Amenity = require('../models/Amenity')

exports.getAmenities = async (req,res) => {

    try {

        const amenities = await Amenity.find({})

        return res.json({amenities})

    } catch (error) {

    }
}

exports.createAmenity = async (req, res) => {

    const { name } = req.body


    Amenity.create({
            name
        })
        
    console.log(name)
}

