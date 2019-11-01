const markerController = require('../controllers').marker;

module.exports = (app) => {
  app.post('/api/v0/markers', markerController.create);
  app.get('/api/v0/markers', markerController.get);
  app.put('/api/v0/markers/:id', markerController.update);
  app.delete('/api/v0/markers/:id', markerController.delete);
};
