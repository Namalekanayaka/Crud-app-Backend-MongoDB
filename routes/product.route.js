const express = require("express");
const router = express.Router();
const product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProduct,
} = require("../controllers/product.controller.js");
const {
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

//update products
router.put("/:id", updateProduct);

//delete products
router.delete("/:id", deleteProduct);
