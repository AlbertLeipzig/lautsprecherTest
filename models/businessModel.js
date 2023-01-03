const mongoose = require('mongoose');
const {
  mainArticleNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainPersonIdSchema
} = require('./mainModel');
const businessSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  owner: mainPersonIdSchema,
  email: mainEmailSchema,
  links: [mainLinkSchema],
  tags: [mainTagSchema],
  image: mainImageSchema,
});

module.exports = mongoose.model('Business', businessSchema);
