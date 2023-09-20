// menuController.js
const MenuItem = require('../Model/menuItemModel'); // Assuming your MenuItem model is defined in 'MenuItem.js'

// Add a new menu item to the array
// Create a new menu item
// Create a new menu item
exports.createMenuItem = async (req, res) => {
    try {
      const { name, price } = req.body;
      const newItem = { name, price };
      
      // Find the existing menu document or create a new one if none exists
      let menu = await MenuItem.findOne({});
      
      if (!menu) {
        menu = new MenuItem({ menu: [] });
      }
      
      menu.menu.push(newItem);
      await menu.save();
      
      res.json(menu);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add a new menu item.' });
    }
  };
  
  
// Delete a menu item by index
// Delete a menu item by index
exports.deleteMenuItem = async (req, res) => {
    try {
      const { index } = req.params;
      const menu = await MenuItem.findOne({});
      
      if (menu && index >= 0 && index < menu.menu.length) {
        const deletedItem = menu.menu.splice(index, 1); // Remove the item and capture the deleted item
        await menu.save();
        res.json({ message: 'Menu item deleted successfully', deletedItem });
      } else {
        res.status(400).json({ error: 'Invalid index or menu is empty.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the menu item.' });
    }
  };
  

// Add multiple menu items to the array
// Add multiple menu items to the array
exports.addManyMenuItems = async (req, res) => {
    try {
      const menuItems = req.body;
      const menu = await MenuItem.findOne({});
      
      if (menu) {
        menu.menu.push(...menuItems); // Use the spread operator to add multiple items
        await menu.save();
        res.json({ message: 'Menu items added successfully', menuItems });
      } else {
        res.status(404).json({ error: 'Menu not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to add multiple menu items.' });
    }
  };
  

// Get all menu items
// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
      const menu = await MenuItem.findOne({});
      
      if (menu) {
        res.json(menu.menu);
      } else {
        res.status(404).json({ error: 'Menu not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch menu items.' });
    }
  };
  
