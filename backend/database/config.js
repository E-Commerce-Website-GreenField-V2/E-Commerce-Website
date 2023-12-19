const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "db password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
