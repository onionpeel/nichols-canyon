const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get('jwtKey');

router.post('/', async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    //Decrypt password
    await bcrypt.compare(password, user.password);

    //Create token and send token back to client
    const payload = {
      id: user._id
    };
    const token = await jwt.sign(payload, jwtKey)

    //Return token and new user to the client
    res.status(201).json({token, user});
  }catch(err) {
    console.log(err);
    res.status(500).json({message: 'A new user was not created'});
  }
});

module.exports = router;
