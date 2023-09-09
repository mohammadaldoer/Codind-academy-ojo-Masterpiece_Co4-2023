// routes/makeOrderRoutes.js

const express = require('express');
const makeOrderController = require('../controller/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new order
router.post('/create', authMiddleware.requireAuth, makeOrderController.createOrder);

// Route to get orders for a specific table
router.get('/orders/:tableNumber', authMiddleware.requireAuth, makeOrderController.getOrdersForTable);

module.exports = router;
