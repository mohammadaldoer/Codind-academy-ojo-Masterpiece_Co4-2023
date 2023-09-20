// Order.js
const mongoose = require('mongoose');
const MenuItem = require('./MenuItem'); // Import the MenuItem model

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItem: {
        name: String, // Use String type for the menu item's name
        price: Number, // Use Number type for the menu item's price
      },
      quantity: Number,
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
