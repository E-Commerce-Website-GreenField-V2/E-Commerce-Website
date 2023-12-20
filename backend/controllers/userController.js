const express = require("express");
const Users = require("../database/models/userModel.js");

const AllUsers = async (req, res) => {
  try {
    const result = await Users.findAll();
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const NewUser = async (req, res) => {
  try {
    const result = await Users.create(req.body);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;
  Users.findByPk(userId)
    .then((user) => {
      const result = user.destroy();
      res.status(201).send(result);
    })
    .catch((err) => console.log(err));
};
module.exports = {
  AllUsers,
  NewUser,
  deleteUser,
};
