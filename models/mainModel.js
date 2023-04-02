import mongoose from 'mongoose';

// testing patterns

const mailValidatorPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]+$/;

const linkValidatorPattern =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/* 
  alternative link pattern
  (http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]* 
  */

const dateValidatorPattern =
  '^(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/(19|20)d{2}$';

// main schemas

const mainAddressSchema = {
  street: String,
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
  maxlength: [120, `an article's name must contain max 120 characters`],
};

const mainDateSchema = {
  type: String,
  required: [true, 'a date must contain a date'],
  trim: true,
};

const mainDescriptionSchema = {
  type: String,
  maxlength: [500, `a description must contain max 500 characters`],
};

const mainEmailSchema = {
  type: String,
  tolowercase: true,
  trim: true,
  required: true,
  /* validate: {
    validator: function (value) {
      return mailValidatorPattern.test(value);
    },
    message: (props) => `${props.value} is not a valid email adress!`,
  },
   */ minlength: [2, `an email adress must contain at least 5 characters`],
  maxlength: [50, `an email adress must contain max 50 characters`],
};

const mainImageSchema = {
  type: String,
  trim: true,
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
  maxlength: [100, `a link must contain max 100 characters`],
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
  maxlength: [30, `a person's name must contain max 30 characters`],
};

// ATENTION! priceSchema defines the schema for every entry in mainPriceSchema

const priceSchema = {
  type: mongoose.Decimal128,
  allowNull: true,
  trim: true,
  min: [0, `a price must be at least 0`],
  maxlength: [5, `a price must contain max 5 characters`],
};

const mainPriceSchema = {
  type : Number
};

const mainTagSchema = {
  type: String,
  trim: true,
  tolowercase: true,
};

export {
  mainPersonNameSchema,
  mainAddressSchema,
  mainDescriptionSchema,
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
