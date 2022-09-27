const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Jargon extends Model {}

Jargon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jargon: {
      type: DataTypes.STRING,
    },
    definition: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "jargon",
  }
);

module.exports = Jargon;
