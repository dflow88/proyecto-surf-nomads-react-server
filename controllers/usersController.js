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

    const { firstName, lastName, username, email, password, role } = req.body


    try {

        const salt = await bcryptjs.genSalt(10)

        const hashedPassword = await bcryptjs.hash(password, salt) 

        console.log(hashedPassword)

        const responseDB = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            role
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
                expiresIn: 10000
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

exports.editUser = async (req, res) => {
    console.log(req.body)
    const { userId, firstName, lastName, email, picture } = req.body

    try {
        const editedUser = await User.findByIdAndUpdate(userId, {firstName, lastName, email, picture})
        res.json(editedUser)

    } catch (error) {
        console.log(error)
    }

}