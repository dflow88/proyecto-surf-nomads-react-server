const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {

    //revision de validaciones

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            msg: errors.array()
        })
    }

    const { firstName, lastName, username, email, password } = req.body


    try {

        const salt = await bcryptjs.genSalt(10)

        const hashedPassword = await bcryptjs.hash(password, salt) 

        console.log(hashedPassword)

        const responseDB = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        })


        // USUARIO CREADO. VAMOS A CREAR EL JSON WEB TOKEN
        // crear un JWT

        const payload = {
            user: {
                id: responseDB._id
            }
        }

        //FIRMAR EL jwt
        jwt.sign(
            payload, //datos que se envian al front
            process.env.SECRET,
            {
                expiresIn: 60
            },
            (error, token) => {
                if(error) throw error
                res.json({
                    token
                })
            }
        )

        console.log(payload)
        
        


    } catch (error) {
        console.log(error)   
    }

}