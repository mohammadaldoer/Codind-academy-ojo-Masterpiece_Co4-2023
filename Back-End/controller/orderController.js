// orderController.js
const Order = require('../models/Order'); // Adjust the path as needed

exports.addToOrder = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    // Create or find an existing order
    let order = await Order.findOne({ user: req.user._id }); // Assuming you have user authentication

    if (!order) {
      order = new Order({ user: req.user._id, items: [] }); // Assuming you associate orders with users
    }

    // Add the item to the order with the specified name, price, and quantity
    order.items.push({
      menuItem: {
        name,
        price,
      },
      quantity,
    });

    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to the order.' });
  }
};
