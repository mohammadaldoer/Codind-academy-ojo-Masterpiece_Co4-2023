// routes/tablesRoutes.js

const express = require('express');
const tablesController = require('../controller/tableController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route for the protected TablesScreen
router.get('/tables', authMiddleware.requireAuth, tablesController.getTables);

module.exports = router;
