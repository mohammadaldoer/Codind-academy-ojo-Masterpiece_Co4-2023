const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tablesRoutes = require('./Routes/tableRoute');
const makeOrderRoutes = require('./Routes/orderRouter');
const userRoutes = require('./Routes/userRoutes'); // Import user routes
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to your MongoDB database
mongoose
  .connect('mongodb+srv://mohammadaldoer:Fev78fpQovovxBQ6@cluster0.ojpsgxa.mongodb.net/cafe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/tables', tablesRoutes);
app.use('/api/make-order', makeOrderRoutes);
app.use('/api/user', userRoutes); // Include user routes
// Add other routes as needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
