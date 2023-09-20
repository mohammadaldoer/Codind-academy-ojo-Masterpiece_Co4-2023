// models/Table.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  bill: {
    type: Number,
    default: 0, // You can set a default value for the bill
  },
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
