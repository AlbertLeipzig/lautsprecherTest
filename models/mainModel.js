import mongoose from 'mongoose';

// testing patterns

const mailValidatorPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]+$/;

const linkValidatorPattern =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/* 
alternative link pattern
(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]* 
*/

// main schemas

const mainAddressSchema = {
  street: {
    type: String,
    required: [true, 'an address must contain a street'],
    minlength: [2, `an address's street must contain at least 2 characters`],
    maxlength: [20, `an address's street must contain max 20 characters`],
    trim: true,
  },
  number: {
    type: String,
    required: [true, 'an address must contain a number'],
    minlength: [1, `an address's number must contain at least 1 character`],
    maxlength: [3, `an address's number must contain max 3 characters`],
    trim: true,
  },
};
const mainArticleIdSchema = {
  type: String,
  minlength: [24, `an ID must contain 24 characters`],
  maxlength: [24, `an ID must contain 24 characters`],
};

const mainArticleNameSchema = {
  type: String,
  required: true,
  tolowercase: true,
  trim: true,
  minlength: [2, `an article's name must contain at least 2 characters`],
  maxlength: [20, `an article's name must contain max 20 characters`],
};

const mainDateSchema = {
  type: Date,
  default: Date.now(),
};

const mainEmailSchema = {
  type: String,
  tolowercase: true,
  trim: true,
  required: true,
  validate: {
    validator: function (value) {
      return mailValidatorPattern.test(value);
    },
    message: (props) => `${props.value} is not a valid email adress!`,
  },
  minlength: [2, `an email adress must contain at least 5 characters`],
  maxlength: [20, `an email adress must contain max 20 characters`],
};

const mainImageSchema = {
  type: String,
  trim: true,
  minlength: [2, `an image url must contain at least 2 characters`],
  maxlength: [50, `an image url must contain max 50 characters`],
};

const mainInstrumentSchema = {
  type: String,
  tolowercase: true,
  trim: true,
  maxlength: [12, `a instrument's name must contain max 12 characters`],
};

const mainLinkSchema = {
  type: String,
  trim: true,
  validate: {
    validator: function (value) {
      return linkValidatorPattern.test(value);
    },
    message: (props) => `${props.value} is not a valid link!`,
  },
  maxlength: [20, `a link must contain max 20 characters`],
};

const mainPersonIdSchema = {
  type: String,
  required: true,
  trim: true,
  minlength: [24, `an ID must contain 24 characters`],
  maxlength: [24, `an ID must contain 24 characters`],
};

const mainPersonNameSchema = {
  type: String,
  required: true,
  tolowercase: true,
  trim: true,
  minlength: [2, `a person's name must contain at least 2 characters`],
  maxlength: [20, `a person's name must contain max 20 characters`],
};

const mainPriceSchema = {
  type: mongoose.Decimal128,
  trim: true,
  maxlength: [5, `a price must contain max 5 characters`],
};

const mainTagSchema = {
  type: String,
  trim: true,
  tolowercase: true,
  maxlength: [10, `a tag must contain max 10 characters`],
};

export {
  mainPersonNameSchema,
  mainAddressSchema,
  mainEmailSchema,
  mainImageSchema,
  mainTagSchema,
  mainLinkSchema,
  mainInstrumentSchema,
  mainArticleIdSchema,
  mainArticleNameSchema,
  mainPriceSchema,
  mainDateSchema,
  mainPersonIdSchema,
};
