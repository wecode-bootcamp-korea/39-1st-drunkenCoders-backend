const express = require("express");

const productsRoutes = express.Router();

const productsController = require("../controllers/productsControllers");

productsRoutes.get("/", productsController.getAllProducts);
productsRoutes.get("/:productId", productsController.getProductDetails);


module.exports = { productsRoutes };
