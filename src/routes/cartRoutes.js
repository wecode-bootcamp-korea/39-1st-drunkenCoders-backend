const express = require("express");

const cartRoutes = express.Router();

const controlCart = require("../controllers/cartControllers");

const { validToken } = require("../utils/auth");

cartRoutes.post("", validToken, controlCart.addCart);
cartRoutes.get("", validToken, controlCart.checkCart);
cartRoutes.patch("", validToken, controlCart.changeCart);
cartRoutes.delete("", validToken, controlCart.delateCart);

module.exports = { cartRoutes };
