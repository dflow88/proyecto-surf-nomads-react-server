const express = require('express');
const router = express.Router();
const amenityController = require('./../controllers/amenityController')

// USERS.JS
// Creacion de usuarios

router.get('/', amenityController.getAmenities)
router.post('/create', amenityController.createAmenity)

module.exports = router