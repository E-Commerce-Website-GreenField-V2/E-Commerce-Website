const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "Louay2004@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
