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
    const error
})