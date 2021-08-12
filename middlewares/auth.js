const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    
    const token = req.header('x-auth-token')

    if(!token){
        return res.status(401).json({ msg: "No token, permission not valid."})
    }
    
    try{
        const openToken = await jwt.verify(token, process.env.SECRET)

        console.log("this is the open token:", openToken)

        req.user = openToken.user

        next()

    } catch(e){

    }

}