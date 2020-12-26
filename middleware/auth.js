require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res){
    //token header
    const token = req.header('x-auth-token');

    //if token is not there
    if(!token){
        return res.status(401).json({msg:'Token???,auth deny'});
    }
    //check token
    try{
        const checktoken = jwt.verify(token, process.env.JWTSECRET)
        req.user = checktoken.user;
    } catch (err){
        res.status(401).json({msg:'Token???'})
    }
}