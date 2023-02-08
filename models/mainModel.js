import mongoose from 'mongoose';

// testing patterns

const mailValidatorPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]+$/;

const linkValidatorPattern =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/* 
  alternative link pattern
  (http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]* 
  */

const dateValidatorPattern = /^\d{4}-\d{2}-\d{2}$/;

// main schemas

const mainAddressSchema = {
  street: {
    type: String,
    tolowercase: true,
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
  maxlength: [120, `an article's name must contain max 120 characters`],
};

const mainDateSchema = {
  type: String,
  required: [true, 'a date must contain a date'],
  trim: true,
  /*  validate: {
    validator: function (value) {
      return dateValidatorPattern.test(value);
    },
    message: (props) => `${props.value} is not a valid date!`,
  }, */
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
  street: {
    type: String,
    trim: true,
    validate: {
      validator: function (value) {
        return linkValidatorPattern.test(value);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    maxlength: [40, `a link must contain max 40 characters`],
  },
  number: {
    type: Number,
    trim: true,
    min: [0, `a street number must be greater than 0`],
    maxlength: [3, `a street number must contain max 3 characters`],
  },
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

// ATENTION! priceSchema defines the schema for every entry in mainPriceSchema

const priceSchema = {
  type: mongoose.Decimal128,
  trim: true,
  min: [0, `a price must be greater than 0`],
  maxlength: [5, `a price must contain max 5 characters`],
};

const mainPriceSchema = {
  vorverkauf: priceSchema,
  abendkasse: priceSchema,
  ab: priceSchema,
  ermaessigt: priceSchema,
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
