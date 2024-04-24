const mongoose = require('mongoose');
const { Schema } = mongoose;


const MenuSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Menu', MenuSchema);
