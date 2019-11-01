
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Markers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    place_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    lng: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    lat: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Markers'),
};
