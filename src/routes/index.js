const express = require("express");

const { productsRoutes } = require("./productsRoutes");
const { usersRoutes } = require("./usersRoutes");

const routes = express.Router();

routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);

module.exports = { routes };
