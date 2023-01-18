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

const singleEvent = new mongoose.Schema({
  name: mainArticleNameSchema,
  musicians: [mainPersonIdSchema],
  bands: [mainArticleIdSchema],
  date: mainDateSchema,
  venue: mainArticleIdSchema,
  price: mainPriceSchema,
  organizer: mainPersonIdSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  link: [mainLinkSchema],
});

const manyEventSchema = new mongoose.Schema({
  events: [singleEvent],
});

const manyEventModel = mongoose.model('ManyEvent', manyEventSchema);

export default manyEventModel;
