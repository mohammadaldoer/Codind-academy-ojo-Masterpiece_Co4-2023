const express = require('express');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
// router.get('/protected', authMiddleware.requireAuth);

// Route for user signup
router.post('/signup', userController.signupUser);

// Route for user login
router.post('/login', userController.loginUser);

module.exports = router;
