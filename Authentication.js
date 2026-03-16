const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

function Authentication (req, res, next) {
    try {
        const token = req.headers.token;
    if(!token){
        return res.status(404).json({
            message : "Token is not availble, Please Login"
        })
    }

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(!decodedData){
        return res.status(403).json({
            message : "Unauthorized Access!"
        })
    } else {
        req.userId = decodedData.id;
        next();
    }
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Error",
            error,
        })
    }

}

module.exports = {
    Authentication
}