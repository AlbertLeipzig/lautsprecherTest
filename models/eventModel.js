import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
  mainPersonIdSchema,
  mainPriceSchema,
  mainDateSchema,
} from './mainModel.js';

const eventSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  musicians : [mainPersonIdSchema],
  bands : [mainArticleIdSchema],
  date: mainDateSchema,
  venue: mainArticleIdSchema,
  price: mainPriceSchema,
  organizer: mainPersonIdSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  link: [mainLinkSchema],
});

const eventModel = mongoose.model('Event', eventSchema);

export default eventModel;
