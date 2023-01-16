import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainAddressSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
} from './mainModel.js';

const venueSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  tag: mainTagSchema,
  link: mainLinkSchema,
  id: mainArticleIdSchema,
  address: mainAddressSchema,
});

const venueModel = mongoose.model('Venue', venueSchema);

export default venueModel;
