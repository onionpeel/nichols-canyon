const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get('jwtKey');
const User = require('../models/User');

const tokenAuth = async (req, res, next) => {
  const token = req.get('x-auth-token');
  //Response if client sends no token
  if(!token) {
    return res.status(401).json({message: 'User is unauthorized.'})
  };
  try {
    //Extract user ID from the token
    const decoded = await jwt.verify(token, jwtKey);
    //Retrive user from DB
    const user = await User.findById({_id: decoded.id}).select('-password');
    //Set user on to request object
    req.user = user._id;
    next();
  } catch(err) {
    console.log(err);
    res.status(401).json({message: 'User is not authorized.'});
  };
};

module.exports = tokenAuth;
