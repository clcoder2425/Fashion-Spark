const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  cat: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true,
    trim: true
  },
  img: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
