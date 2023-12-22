const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductController.js");

// Define routes using the controller methods
router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.get("/category/:categoryId", productsController.getProductsByCategoryController);
router.post("/", productsController.createProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
