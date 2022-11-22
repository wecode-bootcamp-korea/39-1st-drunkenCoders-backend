const express = require("express");

const { productsRoutes } = require("./productsRoutes");
const { usersRoutes } = require("./usersRoutes");

const routes = express.Router();

routes.use("/products", productsRoutes);
routes.use("/users", usersRoutes);

module.exports = { routes };
