const mongoose = require('mongoose');
const {
  mainArticleNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainArticleIdSchema,
  mainPersonIdSchema,
} = require('./mainModel');
const bandSchema = new mongoose.Schema({
  name: mainArticleNameSchema,
  musicians: [mainPersonIdSchema],
  // we need a validation to have at least email or contactPerson, although is possible to have both
  email: mainEmailSchema,
  contactPerson: mainPersonIdSchema,
  image: mainImageSchema,
  tags: [mainTagSchema],
  events: [mainArticleIdSchema],
  links: [mainLinkSchema],
});

module.exports = mongoose.model('Band', bandSchema);
