import mongoose from 'mongoose';
import {
  mainPersonNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainInstrumentSchema,
  mainArticleIdSchema,
} from './mainModel.js';

const musicianSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  instruments: [mainInstrumentSchema],
  bands: [mainArticleIdSchema],
  events: [mainArticleIdSchema],
  links: [mainLinkSchema],
  email: mainEmailSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
});

const musicianModel = mongoose.model('Musician', musicianSchema);

export default musicianModel;
