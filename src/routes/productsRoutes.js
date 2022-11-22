const express = require("express");

const productsRoutes = express.Router();

const productsController = require("../controllers/productsControllers");

productsRoutes.get("/all", productsController.getAllProducts);
productsRoutes.get("/detail/:productId", productsController.getProductDetails);


module.exports = { productsRoutes };
