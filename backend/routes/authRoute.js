
const express = require('express');
const router = express.Router();

// Import the authentication controller
const authController = require('../controllers/authController');

// Define authentication routes
router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;
