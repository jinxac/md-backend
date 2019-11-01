const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');


const MarkerModel = require('../marker');

describe('src/models/Simple', () => {
  const Model = MarkerModel(sequelize, dataTypes);
  checkModelName(Model)('Marker');
});

// Check table properties
describe('models/Communications - Properties Check', () => {
  const Model = MarkerModel(sequelize, dataTypes);
  const instance = new Model();
  ['id', 'name', 'description', 'place_id', 'lng', 'lat'].forEach(
    checkPropertyExists(instance),
  );
});
