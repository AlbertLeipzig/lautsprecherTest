import mongoose from 'mongoose';

import { mainPersonNameSchema, mainEmailSchema } from './mainModel.js';

const messageSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  email: mainEmailSchema,
  message: {
    type: String,
    maxlength: [1000, 'Message cannot be more than 1000 characters'],
    trim : true
  },
});

const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;
