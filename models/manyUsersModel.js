import mongoose from 'mongoose';

const singleUser = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  image: String,
  tags: [String],
  link: [String],
});

const manyUserSchema = new mongoose.Schema({
  users: [singleUser],
});

const manyUserModel = mongoose.model('ManyUser', manyUserSchema);

export default manyUserModel;
