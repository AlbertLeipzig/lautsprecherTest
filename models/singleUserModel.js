import mongoose from 'mongoose';
import { mainPersonNameSchema, mainEmailSchema } from './mainModel.js';

const userSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  email: mainEmailSchema,
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
