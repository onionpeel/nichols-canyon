const express = require('express');
const router = express.Router();
const User = require('../models/User');

//@route    POST /user
//@desc     Creates a new user in the DB
//@access   Public
router.post('/', async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    let savedUser = await user.save();
    res.status(201).json(savedUser);
  }catch(err) {
    console.log(err);
    res.status(500).send('A server error has occurred.')
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
//@access   Private
router.get('/:id', async (req, res) => {
  try{
    const _id = req.params.id;
    const user = await User.findById(_id).select('-password');
    res.status(201).json(user);
  }catch(err) {
    console.log(err);
    res.status(404).send('User not found');
  };
});

module.exports = router;
