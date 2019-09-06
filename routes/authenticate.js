const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get('jwtKey');
const {check, validationResult} = require('express-validator');

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least six characters').isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    };

    try {
      const {email, password} = req.body;

      const existingUser = await User.findOne({email});
      if(!existingUser) {
        return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
      };

      //Decrypt password
      const match = await bcrypt.compare(password, existingUser.password);
      if(!match) {
        return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
      };
      //Create token and send token back to client
      const payload = {
        id: existingUser._id
      };
      const token = await jwt.sign(payload, jwtKey)

      //Return token and new user to the client
      const user = await User.findById(existingUser.id).select('-password');
      res.status(201).json({token, user});
    }catch(err) {
      console.log(err);
      res.status(500).json({msg: 'A new user was not created'});
    };
  }
);

module.exports = router;
