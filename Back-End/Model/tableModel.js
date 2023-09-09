const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  bill: { type: Number, default: 0.0 }, // Initial bill amount is set to 0.0
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
