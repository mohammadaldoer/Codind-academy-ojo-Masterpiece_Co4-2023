// controllers/authController.js
const User = require('../Model/userModel');

// Authenticate user
exports.authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ authenticated: false });
    }

    return res.json({ authenticated: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
