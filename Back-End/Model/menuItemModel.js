// MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  menu: [
    {
      name: String,
      price: Number,
    },
  ],
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
