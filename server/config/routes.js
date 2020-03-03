const networksController = require('../controllers/networks');

module.exports = function (app) {
  app.get('/api/networks', networksController.all);
  app.get('/api/networks/:id', networksController.getOne);
  app.post('/api/networks', networksController.create);
  app.delete('/api/networks/:id', networksController.delete);
  app.put('/api/networks/:id', networksController.update);
}