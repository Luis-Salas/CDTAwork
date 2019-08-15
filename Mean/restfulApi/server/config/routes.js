const restfulController = require('../controllers/taskController');

module.exports = function(app) {
  app.get('/', restfulController.index);
  app.post('/create', restfulController.create);
  app.get('/remove/:id', restfulController.destroy);
  app.get('/:id', restfulController.show);
  app.post('/update/:id', restfulController.update);

};
