const mongoose = require('mongoose');
const {
  mainPersonNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainInstrumentSchema,
  mainArticleIdSchema,
} = require('./mainModel');

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

module.exports = mongoose.model('Musician', musicianSchema);
