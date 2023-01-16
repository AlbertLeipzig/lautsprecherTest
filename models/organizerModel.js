import mongoose from 'mongoose';
import {
  mainPersonNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainLinkSchema,
  mainArticleIdSchema,
} from './mainModel.js';

const organizerSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  link: [mainLinkSchema],
  events: [mainArticleIdSchema],
});

const organizerModel = mongoose.model('Organizer', organizerSchema);

export default organizerModel;
