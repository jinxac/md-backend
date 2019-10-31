const markersController = require("../controllers").markers;

module.exports = (app) => {
  app.post("/api/v0/markers", markersController.create);
  app.get("/api/v0/markers", markersController.get);
  app.put("/api/v0/markers/:id", markersController.update);
  app.delete("/api/v0/markers/:id", markersController.delete);
}