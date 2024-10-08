import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import itemController from './ItemController.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
mongoose
  .connect('mongodb+srv://abelpenguin:Navamintr123@pos.9qng90f.mongodb.net/?retryWrites=true&w=majority&appName=POS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Server client files from React app
app.use(express.static(path.resolve('client/src')));

app.get('/api/items', itemController.getItems, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.post('/api/items', itemController.createItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.delete('/api/items', itemController.deleteItem, (req, res) => {
  return res.status(200).send(res.locals.doc);
});

app.get('*', (req, res) => {
  res.status(404).send('URL is wrong');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
