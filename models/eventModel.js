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

// custom validator that checks if either band or musician is present
const atLeastOne = (musicians, bands) => {
  musicians.length + bands.length > 0;
};

const eventSchema = new mongoose.Schema({
  title: mainArticleNameSchema,
  date: [mainDateSchema],
  price: mainPriceSchema,
  tags: [mainTagSchema],
  venue: {
    type: 'String',
    required: true,
    trim: true,
    length: [24, `an ID must contain 24 characters`],
  },
  link: mainLinkSchema,
});

const eventModel = mongoose.model('Event', eventSchema);
export default eventModel;
