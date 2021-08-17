const Reservation = require('../models/Reservation')

exports.getReservations = async (req,res) => {


    try {

        const reservations = await Reservation.find({})

        res.json(reservations)

    } catch (error) {

    }

}

exports.createReservation = async (req, res) => {

    const { startDate, endDate, email, name, lastName, tourName, totalPrice } = await req.body

    try {
        
        console.log(name)
        const response = await Reservation.create({ startDate, endDate, email, name, lastName, tourName, totalPrice })
        
        res.json(response)

    } catch (error) {

    }
}

exports.editReservation = async (req, res) => {

    const { reservationId, startDate, endDate, email, name, lastName, tourName, totalPrice } = await req.body

    try {
        
        const response = await Reservation.findByIdAndUpdate( reservationId, { startDate, endDate, email, name, lastName, tourName, totalPrice }, {new: true} )
        
        res.json(response)

    } catch (error) {

    }
}

exports.deleteReservation = async (req, res) => {

    const { reservationId } = await req.body

    try {
        
        const response = await Reservation.findByIdAndDelete(reservationId)
        console.log(response)
        res.json(response)

    } catch (error) {

    }
}