const item = require('./ItemModel');

const itemController = {

  async getItems(req, res, next) {
    try {
      const docs = await item.find();
      res.locals.doc = docs;
      if (res.locals.doc === null) return next({
        log: 'Message: Item names not found in DB',
        status: 404,
        message: { error: 'Could not find items in DB!'},
      });
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.getItem: ' + err,
        status: 500,
        message: { error: 'Message: ' + err},
      });
    }
  },

  async createItem(req, res, next) {
    try {
      const docs = await item.create({
        name: req.body.name,
        price: req.body.price
      });
      res.locals.doc = docs;
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.createItem: ' + err,
        status: 500,
        message: { eror: 'Message: ' + err },
      });
    }
  },

  async deleteItem(req, res, next) {
    try {
      const docs = await item.findOneAndDelete({
        name: req.body.name
      });
      res.locals.doc = docs; 
      return next();
    } catch (error) {
      return next({
        log: 'Error in itemController.deleteItem: ' + error,
        status: 500,
        message: { err: 'Message: ' + error},
      });
    }
  },
};

module.exports = itemController;
