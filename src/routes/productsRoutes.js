const express = require("express");

const productsRoutes = express.Router();

const productsController = require("../controllers/productsControllers");

productsRoutes.get("/all", productsController.productsAll);

module.exports = { productsRoutes };
