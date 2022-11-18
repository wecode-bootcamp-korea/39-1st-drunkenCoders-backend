const express = require("express");

const { usersRouter } = require("./userRouter");

const routes = express.Router();

routes.use("/users", usersRouter);

module.exports = { routes };
