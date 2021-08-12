const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/usersController')
const { check } = require('express-validator')

// USERS.JS
// Creacion de usuarios

router.post(
    "/create",
    [
        check("firstName", "Please enter your name").not().isEmpty(),
        check("lastName", "Please enter your last name").not().isEmpty(),     
        check("username", "Please enter your username").not().isEmpty(),
        check('email', "Please enter your email").isEmail(),
        check('password', "Please enter a password at least 6 character and contain At least one uppercase.At least one lower case.At least one special character.").isLength({min: 6})
        .matches(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
                )
    ]    //MIDDLEWARE DE VALIDACION
 , usersController.createUser)

module.exports = router