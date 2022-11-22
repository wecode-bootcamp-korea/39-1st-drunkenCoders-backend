const express = require("express");

const { productsRoutes } = require("./productsRoutes");
const { usersRoutes } = require("./usersRoutes");
const {commentsRoutes} = require("./commentsRoutes");
const routes = express.Router();

routes.use("/products", productsRoutes);
routes.use("/users", usersRoutes);
routes.use("/comments", commentsRoutes)

module.exports = { routes };
