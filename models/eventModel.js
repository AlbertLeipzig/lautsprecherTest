import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainDescriptionSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
  mainPersonIdSchema,
  mainPriceSchema,
  mainDateSchema,
} from './mainModel.js';

const eventSchema = new mongoose.Schema({
  /* name must be changed to title with $rename */
  name: mainArticleNameSchema,
  subtitle: mainArticleNameSchema,
  description: mainDescriptionSchema,
  musicians: [mainPersonIdSchema],
  bands: [mainArticleIdSchema],
  date: [mainDateSchema],
  venue: mainArticleIdSchema,
  price: mainPriceSchema,
  organizer: mainPersonIdSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  link: [mainLinkSchema],
});

const eventModel = mongoose.model('Event', eventSchema);

export default eventModel;
