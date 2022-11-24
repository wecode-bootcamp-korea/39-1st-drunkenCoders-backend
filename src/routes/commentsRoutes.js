const express = require("express");

const commentsRoutes = express.Router();

const commentsController = require("../controllers/commentsController");

commentsRoutes.get("/product", commentsController.getCommentsByProductId);

module.exports = { commentsRoutes };