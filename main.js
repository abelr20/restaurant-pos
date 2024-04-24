const express = require('express');
const app = express();
const mongoose = require('mongoose');

const itemController = require('./itemController');

const PORT = 3000;

mongoose.connect('mongodb+srv://abelpenguin:Navamintr123@pos.9qng90f.mongodb.net/?retryWrites=true&w=majority&appName=POS', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const itemRouter = express.Router();
app.use('/item', itemRouter);

// Create a item in the database
// http://localhost:3000/item
itemRouter.post('/', itemController.createitem, (req, res, next) => {
  return res.status(200).send(res.locals.doc);
});

// Get a item from the database
// http://localhost:3000/item/"name"
itemRouter.get('/:name', itemController.getitem, (req, res, next) => {
  return res.status(200).send(res.locals.doc);
});

// Change a items name
// http://localhost:3000/item/"name"
itemRouter.patch('/:name', itemController.updateitem, (req, res, next) => {
  return res.status(200).json({ message: 'item name updated successfully' });
});

// Delete a item from the database
// http://localhost:3000/item/"name"
itemRouter.delete('/:name', itemController.deleteitem, (req, res, next) => {
  return res.status(200).json({ message: 'item deleted successfully' });
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
