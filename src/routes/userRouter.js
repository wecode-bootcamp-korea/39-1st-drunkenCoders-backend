const express = require("express");

const userController = require("../controllers/userController");

const usersRouter = express.Router();

usersRouter.post("/register", userController.register);
usersRouter.post("/login", userController.login);
usersRouter.delete("/unregister", userController.unregister);

module.exports = { usersRouter };