const jwt = require('jsonwebtoken');

// Middleware to check for a valid JWT token
const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token and extract the user ID
    const decoded = jwt.verify(token, 'your-secret-key');
    req.userId = decoded.userId;
    console.log(req.userId);
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorizedd' });
  }
};

module.exports = { requireAuth };
