const item = require('./ItemModel');

const itemController = {

  async createItem(req, res, next) {
    try {
      res.locals.doc = await item.create({
        name: req.body.name,
        price: req.body.price
      });
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.createItem: ' + err,
        status: 500,
        message: { eror: 'Message: ' + err },
      });
    }
  },

  async getItem(req, res, next) {
    try {
      res.locals.doc = await item.find();
      if (res.locals.doc === null) return next({
        log: 'Message: req.params.name contained a name not found in DB',
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

  async updateItem(req, res, next) {
    try {
      await item.findOneAndUpdate({ 
        name: req.params.name 
      }, {
        name: req.body.name
      });
      return next();
    } catch (err) {
      return next({
        log: 'Error in itemController.updateItem: ' + err,
        status: 500,
        message: { error: 'Message: ' + err},
      });
    }
  },

  async deleteItem(req, res, next) {
    try {
      await item.findOneAndDelete({
        name: req.params.name
      }) 
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
