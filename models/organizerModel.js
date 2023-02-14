import mongoose from 'mongoose';
import {
  mainPersonNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainLinkSchema,
} from './mainModel.js';

const organizerSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  links: [mainLinkSchema],
});

const organizerModel = mongoose.model('Organizer', organizerSchema);

export default organizerModel;
