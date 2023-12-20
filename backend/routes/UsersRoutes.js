const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController.js");

// Define routes using the controller methods
router.get("/", usersController.AllUsers);
router.post("/CreateUser", usersController.NewUser);
router.delete("/delete/:id", usersController.deleteUser);

module.exports = router;
