const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');
const jwtKey = config.get('jwtKey');
const tokenAuth = require('../middleware/tokenAuth');

//@route    POST /user
//@desc     Creates a new user in the DB
//@access   Public
router.post('/', async (req, res) => {
  try {
    //Encrypt password
    let password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //Create new user and store in DB
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password
    });
    let user = await newUser.save();

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
  const user = await User.findById({_id: req.user});
  res.status(200).json(user);
});

module.exports = router;
