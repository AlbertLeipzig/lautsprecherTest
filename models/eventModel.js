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
  /* name must be changed to title with $rename */
  title: mainArticleNameSchema,
  subtitle: {
    type: String,
    tolowercase: true,
    trim: true,
    maxlength: [120, `an article's subtitle must contain max 120 characters`],
  },
  description: mainDescriptionSchema,
  date: [mainDateSchema],
  price: mainPriceSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  link: [mainLinkSchema],


  musicians: [mainPersonIdSchema],
  bands: [mainArticleIdSchema],
  venue: mainArticleIdSchema,
  organizer: mainPersonIdSchema,
});

const eventModel = mongoose.model('Event', eventSchema);
export default eventModel;
