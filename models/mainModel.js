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
    maxlength: [40, `an address's street must contain max 40 characters`],
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
  length: [24, `an ID must contain 24 characters`],
};

const mainArticleNameSchema = {
  type: String,
  required: true,
  tolowercase: true,
  trim: true,
  minlength: [2, `an article's name must contain at least 2 characters`],
  maxlength: [60, `an article's name must contain max 60 characters`],
};

const mainDateSchema = {
  day: {
    type: Number,
    trim: true,
    required: [true, 'a date must contain a day'],
    min: [, `a date's day must be between 1 and 31`],
    max: [31, `a date's day must be between 1 and 31`],
    default: new Date().getDate(),
  },
  month: {
    type: Number,
    trim: true,
    required: [true, 'a date must contain a month'],
    min: [0, `a date's month must be between 0 and 11`],
    max: [11, `a date's month must be between 0 and 11`],
    default: new Date().getMonth(),
  },
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
  maxlength: [50, `an email adress must contain max 50 characters`],
};

const mainImageSchema = {
  type: String,
  trim: true,
  minlength: [2, `an image url must contain at least 2 characters`],
  maxlength: [100, `an image url must contain max 100 characters`],
};

const mainInstrumentSchema = {
  type: String,
  tolowercase: true,
  trim: true,
  maxlength: [20, `a instrument's name must contain max 20 characters`],
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
  maxlength: [40, `a link must contain max 40 characters`],
};

const mainPersonIdSchema = {
  type: String,
  required: true,
  trim: true,
  length: [24, `an ID must contain 24 characters`],
};

const mainPersonNameSchema = {
  type: String,
  required: true,
  tolowercase: true,
  trim: true,
  minlength: [2, `a person's name must contain at least 2 characters`],
  maxlength: [20, `a person's name must contain max 20 characters`],
};

const priceSchema = {
  type: mongoose.Decimal128,
  trim: true,
  maxlength: [5, `a price must contain max 5 characters`],
}

const mainPriceSchema = {
  vorverkauf: priceSchema,
  abendkasse : priceSchema,
  ab : priceSchema,
  ermaessigt : priceSchema,
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
