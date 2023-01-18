import mongoose from 'mongoose';

const emailValidator = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength : [5, "Title must be at least 5 characters long"],
    maxlength : [100, "Title must be at most 100 characters long"],
  },
  quantity : {
    type: Number,
    min : [0, "Quantity must be at least 0"],
    max : [100, "Quantity must be at most 100"],
  },
  email : {
    type: String,
    required: true,
  }
});
