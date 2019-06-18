const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

//@route    POST /comment/:id
//@desc     Creates a new comment in the DB
//@access   Private
router.post('/:id', async (req, res) => {
  const userId = req.params.id;
  let comment = new Comment({
    text: req.body.text,
    user:userId
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

module.exports = router;
