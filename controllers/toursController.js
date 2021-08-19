const Tour = require('../models/Tour')

exports.getTours = async (req,res) => {


    try {

        const tours = await Tour.find({})
        console.log(tours)
        res.json(tours)

    } catch (error) {

    }

}

exports.createTour = async (req, res) => {


    const { name, area, country, guide, priceDay, shortDescription, description, amenities } = await req.body

    try {
        
        console.log(name)
        const response = await Tour.create({ name, area, country, guide, priceDay, shortDescription, description, amenities })
        
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.findTour = async (req, res) => {

    const  tourId  = req.params.tourId
    console.log(tourId)

    try {
        
        const response = await Tour.findById(tourId).populate("amenities").populate("guide")
        console.log(response)
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.editTour = async (req, res) => {

    const { tourId, name, area, country, guide, priceDay, shortDescription, description, amenities } = await req.body

    try {
        
        const response = await Tour.findByIdAndUpdate( tourId, {name, area, country, guide, priceDay, shortDescription, description, amenities}, {new: true} )
        
        res.json(response)

    } catch (error) {

    }
}

exports.deleteTour = async (req, res) => {

    const { tourId } = await req.body

    try {
        
        const response = await Tour.findByIdAndDelete(tourId)
        console.log(response)
        res.json(response)

    } catch (error) {

    }
}