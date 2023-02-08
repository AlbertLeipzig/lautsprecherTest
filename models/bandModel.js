import mongoose from 'mongoose';
import {
  mainArticleNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
  mainPersonIdSchema,
} from './mainModel.js';
const bandSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  musicians: [mainPersonIdSchema],
  // we need a validation to have at least email or contactPerson, although is possible to have both
  email: mainEmailSchema,
  /* contactPerson: mainPersonIdSchema, */
  image: mainImageSchema,
  tags: [mainTagSchema],
  events: [mainArticleIdSchema],
  links: [mainLinkSchema],
});

const bandModel = mongoose.model('Band', bandSchema);

export default bandModel;
