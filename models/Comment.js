const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  userName: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
