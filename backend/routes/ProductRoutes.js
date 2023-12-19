const express = require('express');
const router = express.Router();
const productsController = require('../controllers/ProductController.js');

// Define routes using the controller methods
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

module.exports = router;