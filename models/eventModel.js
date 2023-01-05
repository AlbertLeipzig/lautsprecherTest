const mongoose = require('mongoose');
const {
  mainArticleNameSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
  mainPersonIdSchema,
  mainPriceSchema,
  mainDateSchema
} = require('./mainModel');

const eventSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  organizer: mainPersonIdSchema,
  date: mainDateSchema,
  venue: mainArticleIdSchema,
  price: mainPriceSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  link: [mainLinkSchema],
});

module.exports = mongoose.model('Event', eventSchema);
