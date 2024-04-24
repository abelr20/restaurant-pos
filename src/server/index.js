const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();

const itemController = require('./ItemController');

const PORT = 3000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://abelpenguin:Navamintr123@pos.9qng90f.mongodb.net/?retryWrites=true&w=majority&appName=POS', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/api/items', itemController.getItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.status(404).send('URL is wrong');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
