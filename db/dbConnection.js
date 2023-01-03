const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDb = (uri) => {
  return mongoose.connect(uri);
};

module.exports = connectDb;
