const config = require('config');
const mongoose = require('mongoose');
const mongoDbUri = config.get('mongoDbUri');

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoDbUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connected to database');
  } catch(err) {
    console.log(err);
  };
};

module.exports = dbConnect;
