const Reservation = require('../models/Reservation')

exports.getReservations = async (req,res) => {


    try {

        const reservationsUser = await Reservation.find({}).populate("user")
        const reservationsTour = await Reservation.find({}).populate("tour")
        res.json([reservationsUser, reservationsTour[0].tour])

    } catch (error) {

    }

}

exports.createReservation = async (req, res) => {

    const { startDate, endDate, user, guide, tour, totalPrice } = await req.body

    try {
        
        const response = await Reservation.create({ startDate, endDate, user, guide, tour, totalPrice  })
        console.log(response)
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.editReservation = async (req, res) => {

    const { reservationId, startDate, endDate, user, guide, tour, totalPrice  } = await req.body

    try {
        
        const response = await Reservation.findByIdAndUpdate( reservationId, { startDate, endDate, user, guide, tour, totalPrice  }, {new: true} )
        
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