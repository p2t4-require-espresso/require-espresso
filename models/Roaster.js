const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roastery extends Model {}

Roastery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'roastery',
  }
);
//potentially have users include their own favorite coffee shops in the city
    //
module.exports = Roastery;
