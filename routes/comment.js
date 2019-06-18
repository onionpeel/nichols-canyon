const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const User = require('../models/User');
const tokenAuth = require('../middleware/tokenAuth');

//@route    POST /comment/:id
//@desc     Creates a new comment in the DB
//@access   Private
router.post('/', tokenAuth, async (req, res) => {
  const user = await User.findById({_id: req.user});

  let comment = new Comment({
    text: req.body.text,
    user: user._id
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch(err) {
    console.log(err);
    res.status(500).send('A server error has occurred.');
  };
});

//@route    GET /comment
//@desc     Retrieve all the comments in the DB
//@access   Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch(err) {
    console.log(err);
    res.status(400).send('The request has failed.');
  };
});

//@route    DELETE /comment/:id
//@desc     Delete a comment in the DB
//@access   Private
router.delete('/:id', tokenAuth, async (req, res) => {
  try {
    const commentId = req.params.id;
    const comments = await Comment.findOneAndDelete({_id: commentId, user: req.user});
    res.status(200).json({message: 'Comment deleted'});
  } catch(err) {
    console.log(err);
    res.status(400).send('The request has failed.');
  };
});

//@route    Patch /comment/:id
//@desc     Update a comment in the DB
//@access   Private
router.patch('/:id', tokenAuth, async (req, res) => {
  try {
    const text = req.body.text
    const commentId = req.params.id;

    const update = await Comment.findOneAndUpdate(
      {_id: commentId, user: req.user}, {text}, {new: true});
    res.status(200).json(update);
  } catch(err) {
    console.log(err);
    res.status(400).send('The request has failed.');
  };
});

module.exports = router;
