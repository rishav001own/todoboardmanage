require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

//import models user
const User = require ('../models/User')

//post authuser ad token
router.post('/',
[
    check('email','Email Req').isEmail(),
    check('password','Password Req').exists(),
],
async (req,res) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({error: error.array()});
    }
    const {email, password } = req.body;

    try{
        let user =await User.findOne({ email });
        //checking user is exist or not
        if(!user){
            return res.status(400).json({
                error:[{msg:'Invaild cred please try again'}]
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                errors: [{msg:'Invalid Cred'}]
            });
        } 
        //return jsonwebtoken
        jwt.sign(
            {
                user:{
                    id: user.id,
                },
            },
            process.env.JWTSECRET,{ expiresIn:3600000},(err,token)=>{
                if(err) throw err;
                res.json({token});
            }
        );
    } catch (err){
        console.error(err.message);
        res.status(500).send('server error')
    }
})

module.exports = router;