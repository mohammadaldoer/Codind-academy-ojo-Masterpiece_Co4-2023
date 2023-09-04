// models/property.js
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image URL or file path here
    required: true,
  },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
