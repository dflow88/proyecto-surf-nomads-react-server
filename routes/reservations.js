const express = require('express');
const router = express.Router();
const reservationController = require('./../controllers/reservationController')



router.get('/', reservationController.getReservations)
router.post('/create', reservationController.createReservation)
router.post('/edit', reservationController.editReservation)
router.post('/delete', reservationController.deleteReservation)

module.exports = router