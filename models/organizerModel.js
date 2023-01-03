const mongoose = require('mongoose');
const {
  mainPersonNameSchema,
  mainEmailSchema,
  mainImageSchema,
  mainLinkSchema,
  mainArticleIdSchema,
} = require('./mainModel');

const organizerSchema = new mongoose.Schema({
  firstName: mainPersonNameSchema,
  lastName: mainPersonNameSchema,
  email: mainEmailSchema,
  image: mainImageSchema,
  link: [mainLinkSchema],
  events: [mainArticleIdSchema],
});

module.exports = mongoose.model('Organize', organizerSchema);
