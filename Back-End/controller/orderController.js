// controllers/makeOrderController.js

const Order = require('../Model/orderModel');

// Controller function to create a new order
const createOrder = async (req, res) => {
  const { tableNumber, item, amount } = req.body;
  try {
    // Create a new order
    const newOrder = new Order({ tableNumber, item, amount });
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get orders for a specific table
const getOrdersForTable = async (req, res) => {
  const { tableNumber } = req.params;
  try {
    // Fetch orders data for the specified table
    const ordersData = await Order.find({ tableNumber: parseInt(tableNumber) });
    res.status(200).json({ orders: ordersData });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createOrder,
  getOrdersForTable,
};
