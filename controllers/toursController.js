const Tour = require('../models/Tour')

exports.getTours = async (req,res) => {


    try {

        const tours = await Tour.find({})
        res.json(tours)

    } catch (error) {

    }

}

exports.createTour = async (req, res) => {


    const { name, area, country, guide, priceDay, shortDescription, description, amenities, picture1, picture2, picture3, picture4 } = await req.body

    try {
        
        const response = await Tour.create({ name, area, country, guide, priceDay, shortDescription, description, amenities, picture1, picture2, picture3, picture4 })
        
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.findTour = async (req, res) => {

    const  tourId  = req.params.tourId

    try {
        
        const response = await Tour.findById(tourId).populate({
            path: "guide"
        })
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.editTour = async (req, res) => {

    const { tourId, name, area, country, guide, priceDay, shortDescription, description, amenities, picture1, picture2, picture3, picture4 } = await req.body

    try {
        
        const response = await Tour.findByIdAndUpdate( tourId, {name, area, country, guide, priceDay, shortDescription, description, amenities, picture1, picture2, picture3, picture4}, {new: true} )
        
        res.json(response)

    } catch (error) {

    }
}

exports.deleteTour = async (req, res) => {

    const { tourId } = await req.body

    try {
        
        const response = await Tour.findByIdAndDelete(tourId)
        res.json(response)

    } catch (error) {

    }
}