const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const User = require("../models/userModel.js");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  available: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 1,
      max: 5,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  sellerProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

module.exports = Product;
