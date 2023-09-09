const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  item: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
