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
