const Menu = require('./MenuModel');

const MenuController = {
  // Create a new Menu in the Database
  // Their information will be sent in the request body
  // This should send the created Menu
  async createMenu(req, res, next) {
    try {
      res.locals.doc = await Menu.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
      });
      return next();
    } catch (error) {
      return next({
        log: 'Error in MenuController.createMenu: ' + error,
        status: 500,
        message: { err: 'Message: ' + error },
      });
    }
  },

  async getMenu(req, res, next) {
    try {
      res.locals.doc = await Menu.findOne({ 
        firstName: req.params.name 
      });
      return next();
    } catch (error) {
      return next({
        log: 'Error in MenuController.getMenu: ' + error,
        status: 500,
        message: { err: 'Message: ' + error},
      });
    }
  },

  async updateMenu(req, res, next) {
    try {
      await Menu.findOneAndUpdate({ 
        firstName: req.params.name 
      }, {
        firstName: req.body.firstName
      });
      return next();
    } catch (error) {
      return next({
        log: 'Error in MenuController.updateMenu: ' + error,
        status: 500,
        message: { err: 'Message: ' + error},
      });
    }
  },

  async deleteMenu(req, res, next) {
    try {
      await Menu.findOneAndDelete({
        firstName: req.params.name
      }) 
      return next();
    } catch (error) {
      return next({
        log: 'Error in MenuController.deleteMenu: ' + error,
        status: 500,
        message: { err: 'Message: ' + error},
      });
    }
  },
};

module.exports = MenuController;
