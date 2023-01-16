import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const dbConnection = (uri) => {
  return mongoose.connect(uri);
};

export default dbConnection;
