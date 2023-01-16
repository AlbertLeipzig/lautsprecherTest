import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainPersonIdSchema,
} from './mainModel.js';
const businessSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  owner: mainPersonIdSchema,
  email: mainEmailSchema,
  links: [mainLinkSchema],
  tags: [mainTagSchema],
  image: mainImageSchema,
});

const businessModel = mongoose.model('Business', businessSchema);
export default businessModel;
