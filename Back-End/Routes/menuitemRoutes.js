const express = require('express');
const menuController = require('../controller/menuItemController');

const router = express.Router();

// Add a new menu item
router.post('/menu', menuController.createMenuItem);

// Delete a menu item by index
router.delete('/menu/:index', menuController.deleteMenuItem);

// Add multiple menu items
router.post('/menu/addMany', menuController.addManyMenuItems);

// Get all menu items
router.get('/menu', menuController.getAllMenuItems);

module.exports = router;
