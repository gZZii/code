const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Blague extends Model {}

Blague.init(
  {
    blague: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "blague",
  }
);

module.exports = Blague;
