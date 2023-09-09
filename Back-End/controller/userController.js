const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller function to handle user signup
const signupUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user with the hashed password
    const newUser = new User({ username, password });
    await newUser.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', {
      expiresIn: '1h',
      algorithm: 'HS256', // Explicitly specify the algorithm
    });

    res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to handle user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Passwords match, generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', {
      expiresIn: '1h',
      algorithm: 'HS256', // Explicitly specify the algorithm
    });
    

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
