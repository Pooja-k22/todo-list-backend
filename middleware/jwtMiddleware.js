const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res , next)=>{

    const token = req.headers['authorization'].split(' ')[1]
    console.log(token);

    if(!token){
        return res.status(401).json("Not authorized, no token" )
    }

    try {

        const jwtResponse = jwt.verify(token, process.env.JWT_SECRET)
        console.log(jwtResponse);
        req.payload = jwtResponse.userId

        next()
        
    } catch (error) {
        res.status(500).json("Token failed due to",error );
    }
    }
   module.exports = jwtMiddleware 