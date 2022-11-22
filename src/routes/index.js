const { application } = require('express');

const express = require("express");

const { usersRoutes } = require("./usersRoutes");

const routes = express.Router();

routes.use("/users", usersRoutes);

module.exports = { routes };
