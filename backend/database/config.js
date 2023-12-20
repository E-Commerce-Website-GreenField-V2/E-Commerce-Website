const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "amineGZ99", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
