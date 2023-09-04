const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const propertyRoutes = require('./routes/property');
const propertyRoutes = require('./routes/property'); 
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://mohammadaldoer:Fev78fpQovovxBQ6@cluster0.ojpsgxa.mongodb.net/loginProject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
app.use('/api/user', userRoutes);

app.use('/api/property', propertyRoutes);
  
  app.use('/api', propertyRoutes); //  
  // ...
  
app.listen(8000, () => {
  console.log('Server is running on port 3000');
});
