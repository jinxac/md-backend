
module.exports = (sequelize, DataTypes) => {
  const Markers = sequelize.define('Markers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    place_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lng: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    lat: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
  }, {
    timestamps: false,
  });
  return Markers;
};
