const express = require("express");

const cartRoutes = express.Router();

const controlCart = require("../controllers/cartControllers");

cartRoutes.post("", controlCart.addCart);
cartRoutes.get("/:userId", controlCart.checkCart);
cartRoutes.patch("/changeCart", controlCart.changeCart);
cartRoutes.delete("/deleteCart", controlCart.delateCart);

module.exports = { cartRoutes };
