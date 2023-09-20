// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/userController');

// Authenticate user
router.post('/login', authController.authenticateUser);

module.exports = router;
