// controllers/tablesController.js

const Table = require('../Model/tableModel');

// Controller function to handle the TablesScreen
const getTables = async (req, res) => {
  try {
    // Fetch tables data from the database
    const tablesData = await Table.find();

    // Return the tables data as a response
    res.status(200).json({ tables: tablesData });
  } catch (error) {
    console.error('Error fetching tables data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getTables,
};
