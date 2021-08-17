const express = require('express');
const router = express.Router();
const toursController = require('./../controllers/toursController')



router.get('/', toursController.getTours)
router.post('/create', toursController.createTour)
router.get('/tour-specs/:tourId', toursController.findTour)
router.post('/edit', toursController.editTour)
router.post('/delete', toursController.deleteTour)

module.exports = router