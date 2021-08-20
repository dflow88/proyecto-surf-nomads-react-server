const Reservation = require('../models/Reservation')


exports.getReservations = async (req,res) => {


    try {

        const reservationsUser = await Reservation.find({}).populate("user")
        const reservationsTour = await Reservation.find({}).populate("tour")
        res.json([reservationsUser, reservationsTour[0].tour])

    } catch (error) {

    }
}

exports.getReservationsByUser = async (req,res) => {

    console.log(req.body)
    const userId = await req.body._id
    console.log(req)

    try {
        const reservationsUser = await Reservation.find({ user: '611f67fdf8235e78479735bc'} )
        res.json(reservationsUser)
    } catch (error) {
        console.log(error)
    }
}

exports.createReservation = async (req, res) => {

    const { startDate, endDate, user, guide, tour, totalPrice, priceDay, totalDays, isPaid } = await req.body


    try {
        
        const response = await Reservation.create({ startDate, endDate, user, guide, tour, totalPrice, priceDay, totalDays, isPaid  })
        res.json(response)

    } catch (error) {
        console.log(error)
    }
}

exports.findCreated = async (req, res) => {
    try {
        const response = await Reservation.findOne().sort({created_at: -1})
        console.log(response)
        res.json(response)

    } catch (e) {
        console.log(e)
    }
}



exports.editReservationStatus = async (req, res) => {

    const { reservationId, isPaid } = await req.body
    console.log(req.body)

    try {
        
        const response = await Reservation.findByIdAndUpdate( reservationId, { isPaid }, {new: true} )
        
        res.json(response)

    } catch (error) {

    }
}

// exports.deleteReservation = async (req, res) => {

//     const { reservationId } = await req.body

//     try {
        
//         const response = await Reservation.findByIdAndDelete(reservationId)
//         res.json(response)

//     } catch (error) {

//     }
// }