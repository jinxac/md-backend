'use strict';

module.exports = (sequelize, DataTypes) => {
  const Markers = sequelize.define('Markers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    placeId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lng: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    lat: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {});
  Markers.associate = function(models) {
    // associations can be defined here
  };
  return Markers;
};