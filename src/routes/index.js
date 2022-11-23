const express = require("express");

const { productsRoutes } = require("./productsRoutes");
const { usersRoutes } = require("./usersRoutes");
const { cartRoutes } = require("./cartRoutes");

const routes = express.Router();

routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);
routes.use("/carts", cartRoutes);

module.exports = { routes };
