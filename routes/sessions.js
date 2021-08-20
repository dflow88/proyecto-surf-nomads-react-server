const express = require('express');
const router = express.Router();
const sessionController = require('./../controllers/sessionController')

// USERS.JS
// Creacion de usuarios

router.post('/create-checkout-session', sessionController.generateSession)

module.exports = router