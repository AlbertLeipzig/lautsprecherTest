import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainAddressSchema,
  mainEmailSchema,
  mainImageSchema,
  mainLinkSchema,
} from './mainModel.js';

const venueSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  links: mainLinkSchema,
  address: mainAddressSchema,
});

const venueModel = mongoose.model('Venue', venueSchema);

export default venueModel;
