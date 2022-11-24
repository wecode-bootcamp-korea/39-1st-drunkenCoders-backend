const express = require("express");

const userController = require("../controllers/usersController");

const usersRoutes = express.Router();

usersRoutes.post("/register", userController.register);
usersRoutes.post("/login", userController.login);

module.exports = { usersRoutes };
