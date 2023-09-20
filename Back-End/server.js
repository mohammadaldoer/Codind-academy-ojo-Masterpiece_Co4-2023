const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routes/userRoutes');
const routes = require('./Routes/menuitemRoutes');
const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials to be sent with the request (if needed)
  optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests (OPTIONS)
};

// Middleware
app.use(cors(corsOptions)); //
app.use(express.json());

// Connect to MongoDB (replace 'YOUR_MONGODB_URI' with your MongoDB connection URI)
mongoose
  .connect('mongodb+srv://mohammadaldoer:Fev78fpQovovxBQ6@cluster0.ojpsgxa.mongodb.net/cafee?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Routes
app.use('/auth', authRoutes);
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Connect to your MongoDB database

