const mongoose = require('mongoose');
const {
  mainArticleNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
} = require('./mainModel');

const venueSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  tag: mainTagSchema,
  link: mainLinkSchema,
  id: mainArticleIdSchema,
});
module.exports = mongoose.model('Venue', venueSchema);
