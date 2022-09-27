const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("jargon", "user", "password", {
  dialect: "sqlite",
  host: "./jargon.sqlite",
});

module.exports = sequelize;
