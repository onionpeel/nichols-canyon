const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');
const jwtKey = config.get('jwtKey');
const {check, validationResult} = require('express-validator');
const tokenAuth = require('../middleware/tokenAuth');

//@route    POST /user
//@desc     Creates a new user in the DB
//@access   Public
router.post(
  '/',
  [
    check('name', 'User name is required').isLength({min: 1}),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least six characters').isLength({min: 6})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    };

    try {
      let email = req.body.email;
      let existingUser = await User.findOne({email});
      if(existingUser) {
        return res
          .status(400)
          .json({errors: [{msg: 'A user with that email already exists'}]});
      };

      //Encrypt password
      let password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      //Create new user and store in DB
      let newUser = new User({
        name: req.body.name,
        email,
        password
      });
      let returnUser = await newUser.save();

      //Create token and send token back to client
      const payload = {
        id: returnUser._id
      };
      const token = await jwt.sign(payload, jwtKey)

      //Return token and new user to the client
      const user = {
        id: returnUser.id,
        name: returnUser.name,
        email: returnUser.email
      };
      res.status(201).json({token, user});
    }catch(err) {
      console.log(err);
      res.status(500).json({errors: [{msg: "A new profile was not created"}]});
    };
  }
);

//@route    GET /user
//@desc     Gets all users from the DB
//@access   Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(201).json(users);
  }catch(err) {
    console.log(err);
    res.status(404).send('Users not found');
  };
});

//@route    GET /user/:id
//@desc     Gets a user from the DB
//@access   Public
router.get('/users/:id', async (req, res) => {
  try{
    const _id = req.params.id;
    const user = await User.findById(_id).select('-password');
    res.status(201).json(user);
  }catch(err) {
    console.log(err);
    res.status(404).send('User not found');
  };
});

//@route    GET /user/me
//@desc     Gets the currently authenticated user from the DB
//@access   Private
router.get('/me', tokenAuth, async (req, res) => {
  try{
    const user = await User.findById({_id: req.user});
    res.status(200).json(user);
  }catch(err) {
    res.status(400).json({msg: 'User not found'});
  };
});

module.exports = router;
