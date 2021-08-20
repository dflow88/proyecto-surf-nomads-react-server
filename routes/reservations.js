const express = require('express');
const router = express.Router();
const reservationController = require('./../controllers/reservationController')



router.get('/', reservationController.getReservations)
router.get('/reservations-user', reservationController.getReservationsByUser)

router.get('/find-created', reservationController.findCreated)
router.post('/create', reservationController.createReservation)
router.post('/edit-status', reservationController.editReservationStatus)
// router.post('/delete', reservationController.deleteReservation)

module.exports = router